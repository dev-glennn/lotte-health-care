import { GetUserInfo, UserTypes } from '../api/AuthAPI';

export const useUserInfo = async (): Promise<null | UserTypes> => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  return await GetUserInfo({ token });
};
