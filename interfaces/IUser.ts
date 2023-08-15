export interface IUser {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  address: string;
  phone: string;
  password?: string;
  salt?: string;
  isAdmin?: boolean;
  status?: string;
}
