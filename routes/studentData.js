import express from "express";
import multer from "multer";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import StudentData from "../models/studentData.js";
const router = express.Router();

//configuring __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileExtension = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "public", "upload");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    console.log("Upload directory:", uploadDir);

    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.replace(" ", "-");
    const extension = fileExtension[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const upload = multer({ storage: storage });

router.post(`/`, upload.single("passport"), async (req, res) => {
  const {
    fullName,
    nameOfSchool,
    classID,
    dateOfBirth,
    age,
    sex,
    address,
    parents,
    lga,
    disability,
    disabilityInfo,
    //fingerprintImage,
    //fingerprintTemplate,
  } = req.body;

  /*if (!fingerprintImage || fingerprintTemplate) {
    return res.status(400).send("Fingerprint data is missing");
  }*/

  const passport = req.file;

  const fileName = req.file.filename;
  const filePath = `https://${req.get("host")}/public/upload`;

  if (!passport) {
    res.status(400).json({ message: "passport is not available" });
  }

  const student = new StudentData({
    name: fullName,
    nameOfSchool: nameOfSchool,
    class: classID,
    dob: dateOfBirth,
    age: age,
    sex: sex,
    address: address,
    parent: parents,
    lga: lga,
    disability: disability,
    disabilityInfo: disabilityInfo,
    image: `${filePath}/${fileName}`,
    //fingerprintImage: fingerprintImage,
    //fingerprintTemplate: fingerprintTemplate,
  });

  try {
    const response = await student.save();
    res.status(200).json({
      message: "form data upload has been successful",
      response: response,
    });
  } catch (error) {
    res.status(500).send("Internal server error, record was not created");
  }
});

router.get(`/`, async (req, res) => {
  try {
    const allStudents = await StudentData.find();

    if (!allStudents.length > 0) {
      return res.status(404).json({ message: "Found no student, upload data" });
    }

    res
      .status(200)
      .json({ message: "All Subeb Students", students: allStudents });
  } catch (error) {
    throw new Error("Internal server error", error);
  }
});

export default router;
