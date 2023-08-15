import { createAllPackages } from "./utils/packages"
import { createAllUsers } from "./utils/users"


createAllUsers().then(() => createAllPackages())


