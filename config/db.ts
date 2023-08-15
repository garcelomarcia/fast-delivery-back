import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const dbName = process.env.POSTGRES_DB as string;
const dbUser = process.env.POSTGRES_USER as string;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.POSTGRES_PASSWORD;

const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  logging: false
});

export default db;
