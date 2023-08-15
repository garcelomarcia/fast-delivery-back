import { Model, DataTypes } from "sequelize";
import db from "../config/db";
import { IPackage } from "../interfaces/IPackage";
import getCoordinates from "../utils/coordinates/index";

class Package extends Model<IPackage> {
  public id!: number;
  public clientname!: string;
  public image!: string;
  public quantity!: number;
  public weight!: number;
  public deliveryday!: Date;
  public street!: string;
  public number!: number;
  public city!: string;
  public province!: string;
  public postalCode!: string;
  public lat?: number;
  public lng?: number;
  public fullAdress!: string;
  public coordinates!: string;
  public status!: string;

  static findByName(clientname: string) {
    return Package.findOne({ where: { clientname } });
  }
}

Package.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    clientname: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    quantity: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.FLOAT },
    deliveryday: { type: DataTypes.DATE },
    street: { type: DataTypes.STRING },
    number: { type: DataTypes.INTEGER },
    city: { type: DataTypes.STRING },
    province: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
    lat: { type: DataTypes.FLOAT },
    lng: { type: DataTypes.FLOAT },
    fullAdress: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.street}, ${this.number}, ${this.city}, ${this.province}, ${this.postalCode}`;
      }
    },
    coordinates: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.lat}, ${this.lng}`;
      }
    },
    status: { type: DataTypes.STRING, defaultValue: "pendiente" }
  },
  { sequelize: db, modelName: "package" }
);

Package.beforeCreate(async (paquete) => {
  const [lat, lng] = await getCoordinates(
    `${paquete.street} ${paquete.number}`,
    paquete.city,
    paquete.province,
    paquete.postalCode
  );
  if (lat && lng) {
    paquete.lat = lat;
    paquete.lng = lng;
  } else console.log(paquete.dataValues);
});

export default Package;
