import { useEffect, useMemo, useState } from 'react';
import { Header } from '../../components/home/header/Header';
import {
  DrugCard,
} from '../../components/home';
import { useGetUserAtom, useSetUserAtom } from '../../atoms/UserAtoms.atom';
import { useUserInfo } from '../../hooks/useUserInfo';
import { GetPostList } from '../../api/PostApi';
import { useSetPostAtom } from '../../atoms/PostAtoms.atom';
import { AuthLogout } from '../../api/AuthAPI';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const getUserInfo = useUserInfo;
  const getPostList = GetPostList;
  const getUserAtom = useGetUserAtom();
  const setUserAtom = useSetUserAtom();
  const setPostAtom = useSetPostAtom();
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
  }, [getUserInfo, navigate, setUserAtom]);

  const isUserAtom = useMemo(() => {
    return !!getUserAtom;
  }, [getUserAtom]);

  useEffect(() => {
    if (!isUserAtom) return;
    getPostList().then((res) => {
      setPostAtom(() => res);
    });
  }, [getPostList, isUserAtom, setPostAtom]);

  if (loading) return <></>;

  return (
    <div className={HomeContainer}>
      <Header />
      <CustomTitle />
      <WalkCard />
      <DrugCard />
    </div>
  );
};
