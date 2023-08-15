import { Request, Response } from "express";
import {
  createDeclaracionJurada,
  getDayDeclaracionbyUser
} from "../services/declaracionJuradaService";

export async function firmaDeclaracionJurada(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    await createDeclaracionJurada(req.body);
    return res.status(201).send({ message: "Declaracion Jurada aproba OK!" });
  } catch {
    return res.status(500).send("No se aprobo la Declaracion Jurada");
  }
}

export async function getDayDeclaracion(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const dayDeclaracion = await getDayDeclaracionbyUser(req.body);
    return res
      .status(201)
      .send({ dayDeclaracion, message: "Declaracion Jurada aproba OK!" });
  } catch {
    return res.status(500).send("No se aprobo la Declaracion Jurada");
  }
}
