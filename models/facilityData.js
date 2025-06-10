import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
  blocksOfClassrooms: Number,
  nameOfSchool: String,
  numOfClassrooms: {
    eccde: { value: Number, comment: String },
    primary: { value: Number, comment: String },
    ubeJss: { value: Number, comment: String },
  },
  venOrConducive: {
    eccde: { value: String, comment: String },
    primary: { value: String, comment: String },
    ubeJss: { value: String, comment: String },
  },
  numOfFurnitures: {
    eccde: { value: Number, comment: String },
    primary: { value: Number, comment: String },
    ubeJss: { value: Number, comment: String },
    teachers: { value: Number, comment: String },
  },
  toiletFacility: { value: String, comment: String },
  fencing: { value: String, comment: String },
  teachingAid: {
    blackboard: { value: String, comment: String },
    textbook: { value: String, comment: String },
    whiteboard: { value: String, comment: String },
    lessonNotes: { value: String, comment: String },
    curriculum: { value: String, comment: String },
    eccdeLearningMaterials: { value: String, comment: String },
  },
  agricFarm: { value: String, comment: String },
  sportFacility: { value: String, comment: String },
});

const FacilityData = mongoose.model("FacilityData", FacilitySchema);

export default FacilityData;
