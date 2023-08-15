import User from "./User";
import Package from "./Package";
import Djurada from "./Djurada";

User.hasMany(Package);
Package.belongsTo(User);

User.hasMany(Djurada);
Djurada.belongsTo(User);

export { User, Package };

/**
 * @openapi
 * components:
 *   schemas:
 *
 *     bodyUsersRegisterPost:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         name:
 *           type: string
 *         lastname:
 *           type: string
 *         address:
 *           type: string
 *         phone:
 *           type: number
 *         password:
 *           type: string
 *         isAdmin:
 *           type: boolean
 *     bodyUsersLoginPost:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *     bodyUserDelete:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *     bodyPackageSelect:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *     bodyPackageEdit:
 *       type: object
 *       properties:
 *         packageId:
 *           type: integer
 *         userId:
 *           type: integer
 *     bodyPackagesGet:
 *       type: object
 *       properties:
 *         clientname:
 *           type: string
 *         quantity:
 *           type: integer
 *         weight:
 *           type: integer
 *         address:
 *           type: string
 *         status:
 *           type: string
 */
