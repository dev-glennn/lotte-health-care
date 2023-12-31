import { useEffect, useState } from 'react';
import { HomeContainer } from './styles.css';
import { Header } from '../../components/home/Header';
import { CustomTitle, WalkCard } from '../../components/home';
import { useSetUserAtom } from '../../atoms/UserAtoms.atom';
import { useUserInfo } from '../../hooks/useUserInfo';
import { AuthLogout } from '../../api/AuthAPI';

export const Home = () => {
  const navigate = useNavigate();
  const getUserInfo = useUserInfo;
  const setUserAtom = useSetUserAtom();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) setUserAtom(() => res);
      else {
        AuthLogout();
        navigate('/signIn');
      }
      setLoading(false);
    });
  }, [getUserInfo, setUserAtom]);

  if (loading) return <></>;

  return (
    <div className={HomeContainer}>
      <Header />
      <CustomTitle />
      <WalkCard />
    </div>
  );
};
