import express from "express";
import FacilityDataModel from "../models/facilityData.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const {
    numOfClassrooms,
    classroomOkay,
    venCon,
    numTables,
    numChairs,
    furnitureOkay,
    toiletOkay,
    comment,
    functionalLib,
    wasteDisposal,
    boreHoles,
    backupPower,
    fencing,
    teachingAid,
    learningMat,
  } = req.body;

  const facilityData = new FacilityDataModel({
    numClassrooms: numOfClassrooms,
    classroomOkay: classroomOkay,
    venCon: venCon,
    numTables: numTables,
    numChairs: numChairs,
    furnitureOkay: furnitureOkay,
    toiletOkay: toiletOkay,
    comment: comment,
    functionalLib: functionalLib,
    wasteDisposal: wasteDisposal,
    boreHoles: boreHoles,
    backupPower: backupPower,
    fencing: fencing,
    teachingAid: teachingAid,
    learningMat: learningMat,
  });

  try {
    const facilityData = await facilityData.save();
    res.status(200).json({
      message: "Facility Data Has Been Created",
      facilityData: facilityData,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    throw new Error("Internal Server Error ", error);
  }
});

export default router;
