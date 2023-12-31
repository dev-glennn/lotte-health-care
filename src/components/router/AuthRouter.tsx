import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthLogout } from '../../api/AuthAPI';

export const AuthRoutes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logout = AuthLogout;
  const isAuth = !!localStorage.getItem('token');
  // token 유무로 redirect
  useEffect(() => {
    const authPage = ['/signIn', '/signUp'];
    if (!isAuth && !authPage.includes(pathname)) {
      logout();
      navigate('/signIn');
    } else if (isAuth && authPage.includes(pathname)) {
      navigate('/home');
    }
  }, [isAuth, logout, navigate, pathname]);

  return <Outlet />;
};
