import mongoose from "mongoose";

const Schema = mongoose.Schema;

const captureDeviceSchema = new Schema({
  name: String,
  staffId: String,
  ppaTeacher: String,
  dob: String,
  gender: String,
  nameOfSchool: String,
  contact: Number,
  address: String,
  dateOfFA: String,
  dateOfLP: String,
  nin: Number,
  lga: String,
  image: String,
  location: {
    latitude: String,
    longitude: String,
    area: String,
    city: String,
    country: String,
  },
  fingerprintImage: String, // base64 string of the PNG
  fingerprintTemplate: String, // ISO template base64
});

const CaptureDeviceModel = mongoose.model("CaptureDevice", captureDeviceSchema);

export default CaptureDeviceModel;
