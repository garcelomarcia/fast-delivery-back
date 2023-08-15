import { IDjurada } from "../interfaces/IDjurada";
import Djurada from "../models/Djurada";

export async function createDeclaracionJurada(declaracionData: IDjurada) {
  try {
    const newDeclaracionJurada = await Djurada.create(declaracionData);
    return newDeclaracionJurada;
  } catch (error: any) {
    throw new Error("Failed to create user");
  }
}

interface DeclaracionData {
  userId: number;
  dayDeclaracionJurada: string;
}

export async function getDayDeclaracionbyUser(
  declaracionData: DeclaracionData
) {
  try {
    const { userId } = declaracionData;
    const { dayDeclaracionJurada } = declaracionData;
    const date = new Date(dayDeclaracionJurada);
    const formattedDate = date.toISOString();
    const newDeclaracionJurada = await Djurada.findOne({
      where: { userId, dayDeclaracionJurada: formattedDate }
    });
    return newDeclaracionJurada;
  } catch (error: any) {
    throw new Error("Failed to create user");
  }
}
