import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
  numClassrooms: String,
  classroomOkay: String,
  venCon: String,
  numTables: String,
  numChairs: String,
  furnitureOkay: Number,
  toiletOkay: String,
  comment: String,
  functionalLib: String,
  wasteDisposal: Number,
  boreHoles: String,
  backupPower: String,
  fencing: String,
  teachingAid: String,
  learningMat: String,
});

const FacilityData = mongoose.model("FacilityData", FacilitySchema);

export default FacilityData;
