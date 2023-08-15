export interface IPackage {
  id?: number;
  clientname: string;
  image?: string;
  quantity: number;
  weight: number;
  deliveryday: Date;
  street: string;
  number: number;
  city: string;
  province: string;
  postalCode: string;
  lat?: number;
  lng?: number;
  fullAdress: string;
  coordinates: string;
  status: string;
  userId?: number;
}
