import express from "express";
import multer from "multer";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import StaffDataModel from "../models/staffData.js";
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
    cb(null, "public/upload/staffs");
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
    staffId,
    dateOfBirth,
    gender,
    nameOfSchool,
    contact,
    address,
    dateOfFA,
    dateOfLP,
    nin,
    lga,
    location,
    fingerprintImage,
    fingerprintTemplate,
  } = req.body;

  const finalLocation = JSON.parse(location);

  /*if (!fingerprintImage || fingerprintTemplate) {
    return res.status(400).send("Fingerprint data is missing");
  }*/

  const passport = req.file;

  const fileName = req.file.filename;
  const filePath = `https://${req.get("host")}/public/upload/staffs`;

  if (!passport) {
    res.status(400).json({ message: "passport is not available" });
  }

  const staffData = new StaffDataModel({
    name: fullName,
    staffId: staffId,
    dob: dateOfBirth,
    gender: gender,
    nameOfSchool: nameOfSchool,
    contact: contact,
    address: address,
    dateOfFA: dateOfFA,
    dateOfLP: dateOfLP,
    nin: nin,
    lga: lga,
    image: `${filePath}/${fileName}`,
    location: finalLocation,
    fingerprintImage: fingerprintImage,
    fingerprintTemplate: fingerprintTemplate,
  });

  try {
    const response = await staffData.save();
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
    const allStaffs = await StaffDataModel.find();

    if (!allStaffs.length > 0) {
      return res.status(404).json({ message: "Found no staffs, upload data" });
    }

    res.status(200).json({ message: "All Subeb Staffs", staffs: allStaffs });
  } catch (error) {
    throw new Error("Internal server error", error);
  }
});

export default router;
