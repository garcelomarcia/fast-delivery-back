import { Model, DataTypes } from "sequelize";
import db from "../config/db";
import bcrypt from "bcrypt";
import { IUser } from "../interfaces/IUser";

class User extends Model<IUser> {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public email!: string;
  public address!: string;
  public phone!: number;
  public password!: string;
  public salt!: string;
  public isAdmin!: boolean;
  public status!: string;

  public hash(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  public async validatePassword(password: string): Promise<boolean> {
    return this.hash(password, this.salt).then(
      (hash) => hash === this.password
    );
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
    },
    salt: {
      type: DataTypes.STRING
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "inactive"
    }
  },
  {
    sequelize: db,
    modelName: "user"
  }
);

User.addHook("beforeCreate", async (user: User) => {
  const salt = bcrypt.genSaltSync(9);
  user.salt = salt;
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});

User.addHook("beforeUpdate", async (user: User) => {
  if (user.changed("password")) {
    const salt = bcrypt.genSaltSync(9);
    user.salt = salt;
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }
});

export default User;
