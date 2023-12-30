import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';
import { UserTypes } from '../api/AuthAPI';

export const UserAtom = atomWithImmer<UserTypes | null>(null);

export const useGetUserAtom = () => {
  return useAtomValue(UserAtom);
};
export const useSetUserAtom = () => {
  return useSetAtom(UserAtom);
};
export const useUserAtom = () => {
  const [userInfo, setUserInfo] = useAtom(UserAtom);
  return [userInfo, setUserInfo];
};
