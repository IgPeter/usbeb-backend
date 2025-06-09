import express from "express";
import FacilityDataModel from "../models/facilityData.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const {
    blocksOfClassrooms,
    pupilsNumOfClassroom,
    numPupilsComment,
    numStudentsClassroom,
    numStudentsComment,
    numEccdeClassroom,
    numEccdeComment,
    venPupils,
    venPupilsComment,
    venStudents,
    venStudentsComment,
    venEccde,
    venEccdeComment,
    numFurniturePupils,
    numFurniturePupilsComment,
    numFurnitureStudents,
    numFurnitureStudentsComment,
    numFurnitureEccde,
    numFurnitureEccdeComment,
    teacherFurniture,
    teacherFurnitureComment,
    toiletPupils,
    toiletPupilsComments,
    toiletStudents,
    toiletStudentsComment,
    toiletEccde,
    toiletEccdeComment,
    fencing,
    fencingComment,
    blackboard,
    blackboardComment,
    textbook,
    textbookComment,
    whiteboard,
    whiteboardComment,
    lessonNotes,
    lessonNotesComment,
    agricFarm,
    agricFarmComment,
    sportFacility,
    sportFacilityComment,
  } = req.body;

  const facilityData = new FacilityDataModel({
    blocksOfClassrooms: blocksOfClassrooms,
    numOfClassrooms: {
      pupils: { value: pupilsNumOfClassroom, comment: numPupilsComment },
      students: { value: numStudentsClassroom, comment: numStudentsComment },
      eccde: { value: numEccdeClassroom, comment: numEccdeComment },
    },
    venOrConducive: {
      pupils: { value: venPupils, comment: venPupilsComment },
      students: { value: venStudents, comment: venStudentsComment },
      eccde: { value: venEccde, comment: venEccdeComment },
    },
    numOfFurnitures: {
      pupils: { value: numFurniturePupils, comment: numFurniturePupilsComment },
      students: {
        value: numFurnitureStudents,
        comment: numFurnitureStudentsComment,
      },
      eccde: { value: numFurnitureEccde, comment: numFurnitureEccdeComment },
      teachers: { value: teacherFurniture, comment: teacherFurnitureComment },
    },
    toiletFacility: {
      pupils: { value: toiletPupils, comment: toiletPupilsComments },
      students: { value: toiletStudents, comment: toiletStudentsComment },
      eccde: { value: toiletEccde, comment: toiletEccdeComment },
    },
    fencing: { value: fencing, comment: fencingComment },
    teachingAid: {
      blackboard: { value: blackboard, comment: blackboardComment },
      textbook: { value: textbook, comment: textbookComment },
      whiteboard: { value: whiteboard, comment: whiteboardComment },
      lessonNotes: { value: lessonNotes, comment: lessonNotesComment },
    },
    agricFarm: { value: agricFarm, comment: agricFarmComment },
    sportFacility: { value: sportFacility, comment: sportFacilityComment },
  });

  try {
    const newFacilityData = await facilityData.save();
    res.status(200).json({
      message: "Facility Data Has Been Created",
      facilityData: newFacilityData,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    throw new Error("Internal Server Error ", error);
  }
});

export default router;
