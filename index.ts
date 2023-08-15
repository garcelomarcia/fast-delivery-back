import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/index";
import db from "./config/db";
import { User, Package } from "./models";
import cors from "cors";
import https from "https";
import fs from "fs";
const { swaggerDocs } = require("./swagger/swagger");

const app = express();

dotenv.config();

app.use(
  cors({
    origin: "*", // Allow requests from any domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use("/api", router);

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

db.sync({ force: false }).then(() => {
  const options = {
    key: fs.readFileSync("/etc/ssl/private/nginx-selfsigned.key"),
    cert: fs.readFileSync("/etc/ssl/certs/nginx-selfsigned.crt")
  };

  https.createServer(options, app).listen(3001, () => {
    console.log(`Server listening on port 3001 (HTTPS)`);
    swaggerDocs(app, 3001);
  });

  // app.listen(3001, () => {
  //   console.log(`Server listening on port 3001`);
  //   swaggerDocs(app, 3001);
  // });
});
