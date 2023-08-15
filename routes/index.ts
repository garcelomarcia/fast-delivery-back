import express, { Router } from "express";
const router: Router = express.Router();
import usersRouter from "./user";
import packageRouter from "./package";
import ddjjRouter from "./ddjj";

router.use("/user", usersRouter);
router.use("/packages", packageRouter);
router.use("/ddjj", ddjjRouter);

export default router;
