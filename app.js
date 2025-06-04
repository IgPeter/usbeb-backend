import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import CaptureDeviceRouter from "./routes/captureDevice.js";
dotenv.config();

const app = express();

const api = process.env.API_URL;
const PORT = process.env.PORT;
const db_conn_string = process.env.DB_CONN_STRING;

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use(cors());
//app.options("*", cors());

//defining routes
app.use(`${api}/captureDevice`, CaptureDeviceRouter);

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

const server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;
  console.log("app running at port", port);
});
