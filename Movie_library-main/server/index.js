import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";
import {MongoClient} from 'mongodb'
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

// const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(async () => {
  console.log("Mongodb connected");
}
).catch((err)=>console.error("error connecting",err))

app.listen(port,()=>{
  console.log(`server is running  at ${port}`,)
})





//   server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
// }).catch((err) => {
//   console.log({ err });
//   process.exit(1);
// });

//test
// console.log(process.env.MONGODB_URL)
// mongoose.connect(process.env.MONGODB_URL)
//   .then(async () => {
//     console.log("Mongodb connected");
//     await logDatabaseName();


//     // Create a MongoClient to list databases
//     const client = new MongoClient(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });

//       await client.connect();
//       await listDatabases(client);
    

//     // Start the server
//     server.listen(port, () => {
//       console.log(`Server is listening on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Connection error:", err);
//     process.exit(1);
//   });