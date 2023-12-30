import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const AuthRoutes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem('uuid');

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
