import mongoose from "mongoose";

const Schema = mongoose.Schema;

const staffDataSchema = new Schema({
  name: String,
  staffId: String,
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

const StaffDataModel = mongoose.model("StaffData", staffDataSchema);

export default StaffDataModel;
