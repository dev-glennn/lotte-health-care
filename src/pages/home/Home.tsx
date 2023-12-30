import { useEffect, useState } from 'react';
import { HomeContainer } from './styles.css';
import { useSetUserAtom } from '../../atoms/UserAtoms.atom';
import { useUserInfo } from '../../hooks/useUserInfo';

export const Home = () => {
  const getUserInfo = useUserInfo;
  const setUserAtom = useSetUserAtom();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) setUserAtom(() => res);
      setLoading(false);
    });
  }, [getUserInfo, setUserAtom]);

  if (loading) return <></>;
  return (
    <div className={HomeContainer}>
    </div>
  );
};
