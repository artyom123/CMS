export type Employee = {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  phone: string;
  isAdmin?: boolean
  telegram: string;
  viber: string | undefined;
  isActive: boolean;
};