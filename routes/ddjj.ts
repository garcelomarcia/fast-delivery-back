import express, { Router } from "express";
import { firmaDeclaracionJurada } from "../controllers/ddjjController";
import { getDayDeclaracion } from "../controllers/ddjjController";

const router: Router = express.Router();

router.post("/", firmaDeclaracionJurada);

router.get("/daydeclaracion", getDayDeclaracion);

export default router;
