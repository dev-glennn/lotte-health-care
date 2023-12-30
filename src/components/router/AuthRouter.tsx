import { useEffect, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useUserInfo } from '../../hooks/useUserInfo';

export const AuthRoutes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const getUserInfo = useUserInfo;
  const token = localStorage.getItem('token');
  const isAuth = useMemo(() => !!token, [token]);

  // token 유효성 체크
  useEffect(() => {
    getUserInfo().then((res) => {
      if (!res) {
        localStorage.removeItem('token');
        navigate('/signIn');
      }
    });
  }, [getUserInfo, navigate, token]);

  // token 유무로 redirect
  useEffect(() => {
    const authPage = ['/signIn', '/signUp'];
    if (!isAuth && !authPage.includes(pathname)) {
      navigate('/signIn');
    } else if (isAuth && authPage.includes(pathname)) {
      navigate('/home');
    }
  }, [isAuth, navigate, pathname]);

  return <Outlet />;
};
