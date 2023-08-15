import { Model, DataTypes } from "sequelize";
import db from "../config/db";
import { IDjurada } from "../interfaces/IDjurada";

class Djurada extends Model<IDjurada> {
  public id!: number;
  public dayDeclaracionJurada!: Date;
  public bebidasAlcoholicas!: string;
  public medicamentos!: string;
  public estadoEmocional!: string;

  static findByName(userId: number) {
    return Djurada.findOne({ where: { userId } });
  }
}

Djurada.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dayDeclaracionJurada: { type: DataTypes.DATE },
    bebidasAlcoholicas: { type: DataTypes.STRING },
    medicamentos: { type: DataTypes.STRING },
    estadoEmocional: { type: DataTypes.STRING }
  },

  { sequelize: db, modelName: "djurada" }
);

export default Djurada;
