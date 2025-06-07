import mongoose from "mongoose";

const Schema = mongoose.Schema;

const captureDeviceSchema = new Schema({
  name: String,
  staffId: String,
  dob: String,
  gender: String,
  nameOfSchool: String,
  contact: Number,
  address: String,
  dateOfFA: String,
  nin: Number,
  lga: String,
  image: String,
  fingerprintImage: String, // base64 string of the PNG
  fingerprintTemplate: String, // ISO template base64
});

const CaptureDeviceModel = mongoose.model("CaptureDevice", captureDeviceSchema);

export default CaptureDeviceModel;
