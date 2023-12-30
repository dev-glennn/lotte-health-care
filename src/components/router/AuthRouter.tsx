import { useEffect, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useUserInfo } from '../../hooks/useUserInfo';
import { AuthLogout } from '../../api/AuthAPI';

export const AuthRoutes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const getUserInfo = useUserInfo;
  const logout = AuthLogout;
  const token = localStorage.getItem('token');
  const isAuth = useMemo(() => !!token, [token]);

  // token 유효성 체크
  useEffect(() => {
    getUserInfo().then((res) => {
      if (!res) {
        logout();
        navigate('/signIn');
      }
    });
  }, [getUserInfo, logout, navigate, token]);

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
