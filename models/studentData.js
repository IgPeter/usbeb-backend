import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentDataSchema = new Schema({
  name: String,
  class: String,
  dob: String,
  age: Number,
  sex: String,
  address: String,
  parent: String,
  lga: String,
  disability: String,
  image: String,
  fingerprintImage: String, // base64 string of the PNG
  fingerprintTemplate: String, // ISO template base64
});

const StudentDataModel = mongoose.model("StudentData", studentDataSchema);

export default StudentDataModel;
