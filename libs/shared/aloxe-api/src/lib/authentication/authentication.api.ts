import { AxiosInstance } from '../common';

export type PostLoginPayload = {
  phoneNumber: string;
  password: string;
};

export type USER_ROLE = "CUSTOMER" | "DRIVER" | "STAFF";

export type PostLoginResponse = {
  accessToken: string;
  fullName?: string;
  phoneNumber?: string;
  userId?: number;
  role?: USER_ROLE;
  customerId?: number;
  driverId?: number;
  staffId?: number;
};

export type PostRegisterPayload = {
  fullName: string;
  phoneNumber: string;
  address: string;
  dob: string;
  password: string;
};

export type PostRegisterResponse = {
  id: number;
  fullName: string;
  phoneNumber: string;
  address: string | null;
  dob: Date | null;
  role: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
};

export const postLogin = (payload: PostLoginPayload) => {
  return AxiosInstance.post<PostLoginResponse>('/api/auth/login', payload);
};

export const postRegister = (payload: PostRegisterPayload) => {
  return AxiosInstance.post<PostRegisterPayload>('/api/users/register', payload);
};
