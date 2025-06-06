import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import CaptureDeviceRouter from "./routes/captureDevice.js";
import StudentDataRouter from "./routes/studentData.js";
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

//defining routes
app.use(`${api}/captureDevice`, CaptureDeviceRouter);
app.use(`${api}/studentData`, StudentDataRouter);

mongoose
  .connect(db_conn_string)
  .then(() => {
    console.log("Database connected..");
  })
  .catch((error) => {
    console.log(error);
    throw new Error("Database connection failed");
  });

/*app.listen(PORT, () => {
  console.log(`app is running at localhost: ${PORT}`);
})*/

var server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;
  console.log("app running at port", port);
});
