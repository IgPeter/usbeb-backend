import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
  blocksOfClassrooms: Number,
  numOfClassrooms: {
    pupils: { value: Number, comment: String },
    students: { value: Number, comment: String },
    eccde: { value: Number, comment: String },
  },
  venOrConducive: {
    pupils: { value: String, comment: String },
    students: { value: String, comment: String },
    eccde: { value: String, comment: String },
  },
  numOfFurnitures: {
    pupils: { value: Number, comment: String },
    students: { value: Number, comment: String },
    eccde: { value: Number, comment: String },
    teachers: { value: Number, comment: String },
  },
  toiletFacility: {
    pupils: { value: String, comment: String },
    students: { value: String, comment: String },
    eccde: { value: String, comment: String },
  },
  fencing: { value: String, comment: String },
  teachingAid: {
    blackboard: { value: String, comment: String },
    textbook: { value: String, comment: String },
    whiteboard: { value: String, comment: String },
    lessonNotes: { value: String, comment: String },
  },
  agricFarm: { value: String, comment: String },
  sportFacility: { value: String, comment: String },
});

const FacilityData = mongoose.model("FacilityData", FacilitySchema);

export default FacilityData;
