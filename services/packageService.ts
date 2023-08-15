import { IPackage } from "../interfaces/IPackage";
import { Package, User } from "../models";

export async function selectPackagesService(
  userId: string,
  packageIds: number[]
) {
  try {
    const user: User | null = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const packages: Package[] = await Package.findAll({
      where: {
        id: packageIds
      }
    });
    if (packageIds.length !== packages.length) {
      throw new Error("Some packages do not exist");
    }
    await Package.update({ userId: user.id }, { where: { id: packageIds } });
    return "All packages selected";
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function editPackageService(
  packageId: string,
  userId: string,
  packageData: any
) {
  try {
    const [_, [editedPackage]] = await Package.update(packageData, {
      where: { id: packageId, userId: userId },
      returning: true,
      individualHooks: true
    });
    if (!editedPackage) {
      throw new Error("Package not found");
    }
    console.log(_);
    return editedPackage;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function editPackageStatusService(
  packageId: string,
  packageData: any
) {
  try {
    const [_, [editedPackage]] = await Package.update(packageData, {
      where: { id: packageId },
      returning: true,
      individualHooks: true
    });
    if (!editedPackage) {
      throw new Error("Package not found");
    }
    console.log(_);
    return editedPackage;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function viewPackageService(packageId: number, userId: number) {
  try {
    const myPackages = await Package.findOne({
      where: {
        userId: userId,
        id: packageId
      }
    });
    if (!myPackages) {
      throw new Error("Packages not found");
    }
    return myPackages;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getPackageById(packageId: string) {
  try {
    const myPackage = await Package.findOne({
      where: {
        id: packageId
      }
    });
    if (!myPackage) {
      throw new Error("Packages not found");
    }
    return myPackage;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getAllDeliveryPackagesService(userId: string) {
  try {
    const packages: Package[] = await Package.findAll({
      where: {
        userId: userId
      }
    });
    if (!packages[0]) {
      throw new Error("No packages found");
    }
    return packages;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getAllPackagesService() {
  try {
    const allPackages = await Package.findAll({
      where: {
        status: "pendiente"
      }
    });
    if (!allPackages) {
      throw new Error("Packages not found");
    }
    return allPackages;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getAllPackagesStatusService() {
  try {
    const allPackages = await Package.findAll();
    if (!allPackages) {
      throw new Error("Packages not found");
    }
    return allPackages;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getAllpackagesbyDayService(deliveryday: string) {
  try {
    const allPackages = await Package.findAll({
      where: {
        deliveryday: deliveryday
      }
    });
    if (!allPackages) {
      throw new Error("Packages not found");
    }
    return allPackages;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getDeliveryPackagesService(id: string) {
  try {
    const allPackages = await Package.findAll({
      where: {
        userId: id,
        status: "en curso"
      }
    });
    if (!allPackages) {
      throw new Error("Packages not found");
    }
    return allPackages;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function createPackageService(packageData: IPackage) {
  try {
    const newPackage = await Package.create(packageData);
    if (!newPackage) {
      throw new Error("Error creating package");
    }
    return newPackage;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function updatePackageService(
  packageId: string,
  packageData: any
) {
  try {
    const [_, [editedPackage]] = await Package.update(packageData, {
      where: { id: packageId },
      returning: true,
      individualHooks: true
    });
    if (!editedPackage) {
      throw new Error("Package not found");
    }
    console.log(_);
    return editedPackage;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function deletePackageService(packageId: string) {
  try {
    const deletedPackage = await Package.destroy({
      where: { id: packageId }
    });
    if (!deletedPackage) {
      throw new Error("Package not found");
    }
    return "Package deleted";
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function historialPackagesService(userId: string) {
  try {
    const packages = await Package.findAll({ where: { id: userId } });
    return packages;
  } catch (error) {
    throw new Error("Internal server error");
  }
}

export async function getAllPackagesDayService(day: string) {
  try {
    const packages: Package[] = await Package.findAll({
      where: {
        deliveryday: day,
        status: "pendiente"
      }
    });
    return packages;
  } catch (error: any) {
    throw new Error(`Internal Server Error:${error.message}`);
  }
}
