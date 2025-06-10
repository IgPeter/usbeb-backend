import express from "express";
import FacilityDataModel from "../models/facilityData.js";
const router = express.Router();

router.post(`/`, async (req, res) => {
  const {
    blocksOfClassrooms,
    nameOfSchool,
    numEccdeClassroom,
    numEccdeComment,
    numPrimaryClassroom,
    numPrimaryClassroomComment,
    numUbeJssClassroom,
    numUbeJssClassroomComment,
    venEccde,
    venEccdeComment,
    venPrimary,
    venPrimaryComment,
    venUbeJss,
    venUbeJssComment,
    eccdeFurniture,
    eccdeFurnitureComment,
    primaryFurniture,
    primaryFurnitureComment,
    ubeJssFurniture,
    ubeJssFurnitureComment,
    teachersFurniture,
    teachersFurnitureComment,
    toilet,
    toiletComment,
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
    curriculum,
    curriculumComment,
    eccdeLearningMaterials,
    elmComment,
    agricFarm,
    agricFarmComment,
    sportFacility,
    sportFacilityComment,
  } = req.body;

  console.log("I have read all data successfully");

  const facilityData = new FacilityDataModel({
    blocksOfClassrooms: blocksOfClassrooms,
    nameOfSchool: nameOfSchool,
    numOfClassrooms: {
      eccde: { value: numEccdeClassroom, comment: numEccdeComment },
      primary: {
        value: numPrimaryClassroom,
        comment: numPrimaryClassroomComment,
      },
      ubeJss: { value: numUbeJssClassroom, comment: numUbeJssClassroomComment },
    },
    venOrConducive: {
      eccde: { value: venEccde, comment: venEccdeComment },
      primary: { value: venPrimary, comment: venPrimaryComment },
      ubeJss: { value: venUbeJss, comment: venUbeJssComment },
    },
    numOfFurnitures: {
      eccde: { value: eccdeFurniture, comment: eccdeFurnitureComment },
      primary: {
        value: primaryFurniture,
        comment: primaryFurnitureComment,
      },
      ubeJss: { value: ubeJssFurniture, comment: ubeJssFurnitureComment },
      teachers: { value: teachersFurniture, comment: teachersFurnitureComment },
    },
    toiletFacility: { value: toilet, comment: toiletComment },
    fencing: { value: fencing, comment: fencingComment },
    teachingAid: {
      blackboard: { value: blackboard, comment: blackboardComment },
      textbook: { value: textbook, comment: textbookComment },
      whiteboard: { value: whiteboard, comment: whiteboardComment },
      lessonNotes: { value: lessonNotes, comment: lessonNotesComment },
      curriculum: { value: curriculum, comment: curriculumComment },
      eccdeLearningMaterials: {
        value: eccdeLearningMaterials,
        comment: elmComment,
      },
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
  }
});

export default router;
