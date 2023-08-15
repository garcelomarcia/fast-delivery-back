import { Request, Response } from "express";
import {
  selectPackagesService,
  editPackageService,
  getAllDeliveryPackagesService,
  getAllPackagesService,
  createPackageService,
  updatePackageService,
  deletePackageService,
  getDeliveryPackagesService,
  viewPackageService,
  historialPackagesService,
  editPackageStatusService,
  getAllPackagesDayService,
  getAllPackagesStatusService,
  getAllpackagesbyDayService,
  getPackageById
} from "../services/packageService";

export async function selectPackages(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const packageIds: number[] = req.body;
    await selectPackagesService(userId, packageIds);
    return res.status(200).send({ message: "All packages selected" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function editPackage(req: Request, res: Response) {
  try {
    const packageId = req.params.idPackage;
    const userId = req.params.idUser;
    const editedPackage = await editPackageService(packageId, userId, req.body);
    return res
      .status(200)
      .send({ editedPackage, message: "Package edited successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function editPackageTake(req: Request, res: Response) {
  try {
    const packageId = req.params.idPackage;
    const editedPackage = await editPackageStatusService(packageId, req.body);
    return res
      .status(200)
      .send({ editedPackage, message: "Package edited successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function viewPackage(req: Request, res: Response) {
  try {
    const packageId = Number(req.params.idPackage);
    const userId = Number(req.params.idUser);
    const myPackage = await viewPackageService(packageId, userId);
    return res
      .status(200)
      .send({ myPackage, message: "Package get successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function getAllDeliveryPackages(req: Request, res: Response) {
  try {
    const userId = req.params.idUser;
    const packages = await getAllDeliveryPackagesService(userId);
    return res.status(200).send({ packages, message: "All packages" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function getAllPackages(req: Request, res: Response) {
  try {
    const allPackages = await getAllPackagesService();
    return res.status(200).send({ allPackages, message: "All packages" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function getAllpackagesStatus(req: Request, res: Response) {
  try {
    const allPackages = await getAllPackagesStatusService();
    return res
      .status(200)
      .send({ allPackages, message: "All packages All status" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function getAllpackagesbyDayStatus(req: Request, res: Response) {
  try {
    const day: string = req.params.deliveryDay;
    const allPackages = await getAllpackagesbyDayService(day);
    return res
      .status(200)
      .send({ allPackages, message: "All packages All status by Day" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function getAllpackagesDay(req: Request, res: Response) {
  try {
    const day: string = req.params.currentDate;
    const AllPackagesDay = await getAllPackagesDayService(day);
    return res
      .status(200)
      .send({ AllPackagesDay, message: "All packages Day" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function getDeliveryPackages(req: Request, res: Response) {
  try {
    const id: string = req.params.id;
    const allPackages = await getDeliveryPackagesService(id);
    return res.status(200).send({ allPackages, message: "All packages" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}
export async function createPackage(req: Request, res: Response) {
  try {
    const newPackage = await createPackageService(req.body);
    return res
      .status(201)
      .send({ newPackage, message: "Package created successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function updatePackage(req: Request, res: Response) {
  try {
    const packageId = req.params.id;
    const editedPackage = await updatePackageService(packageId, req.body);
    return res
      .status(200)
      .send({ editedPackage, message: "Package updated successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function deletePackage(req: Request, res: Response) {
  try {
    const packageId = req.params.id;
    await deletePackageService(packageId);
    return res.status(200).send({ message: "Package deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function deleteDeliveredPackage(req: Request, res: Response) {
  try {
    const packageId = req.params.id;
    const toBeDeleted = await getPackageById(packageId);
    if (toBeDeleted.status === "entregado") {
      await deletePackageService(packageId);
      return res.status(200).send({ message: "Package deleted successfully" });
    } else {
      return res
        .status(401)
        .send({ message: "You do not have permission to delete" });
    }
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function historialPackages(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const historial = await historialPackagesService(userId);
    if (historial.length === 0) {
      return res.status(400).send({ message: "Not packages found" });
    }
    return res.status(200).send({ message: "All deliveries packages" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}
