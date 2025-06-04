import mongoose from "mongoose";

const Schema = mongoose.Schema;

const captureDeviceSchema = new Schema({
  name: String,
  staffid: String,
  dob: String,
  gender: String,
  ppa: String,
  pupils: Number,
  image: String,
  fingerprintImage: String, // base64 string of the PNG
  fingerprintTemplate: String, // ISO template base64
});

const CaptureDeviceModel = mongoose.model("CaptureDevice", captureDeviceSchema);

export default CaptureDeviceModel;
