import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import StaffDataRouter from "./routes/staffData.js";
import StudentDataRouter from "./routes/studentData.js";
import FacilityDataRouter from "./routes/facilityData.js";
dotenv.config();

const app = express();

const api = process.env.API_URL;
const PORT = process.env.PORT;
const db_conn_string = process.env.DB_CONN_STRING;

//configuring __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use(cors());
//app.options("*", cors());

//serving static files
app.use("/public", express.static(path.join(__dirname, "public")));
//app.use("/upload", express.static(path.join(__dirname, "public", "upload")));

//defining routes
app.use(`${api}/staffData`, StaffDataRouter);
app.use(`${api}/studentData`, StudentDataRouter);
app.use(`${api}/facilityData`, FacilityDataRouter);

mongoose
  .connect(db_conn_string)
  .then(() => {
    console.log("Database connected..");
  })
  .catch((error) => {
    console.log(error);
    throw new Error("Database connection failed");
  });

mongoose.connection.on("error", (err) => {
  console.error("Mongoose runtime error:", err);
});
/*app.listen(PORT, () => {
  console.log(`app is running at localhost: ${PORT}`);
})*/

var server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;
  console.log("app running at port", port);
});
