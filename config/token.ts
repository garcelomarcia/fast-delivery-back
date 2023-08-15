import jwt from "jsonwebtoken";
import { IPayload } from "../interfaces/IPayload";
const SECRET = "grupo2";

export function generateToken(payload: IPayload): string {
  const token: string = jwt.sign({ payload }, SECRET, {
    expiresIn: "2h"
  });

  return token;
}

export function validateToken(token: string) {
  return jwt.verify(token, SECRET);
}
