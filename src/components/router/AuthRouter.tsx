import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const AuthRoutes = () => {
  const { pathname } = useLocation();
  let navigate = useNavigate();
  const isAuth: boolean = false;

  useEffect(() => {
    const authPage = ['/signIn', '/signUp'];
    if (!isAuth && !authPage.includes(pathname)) {
      navigate('/signIn');
    } else if (isAuth && authPage.includes(pathname)) {
      navigate('/home');
    }
  }, [isAuth, pathname]);

  return <Outlet />;
};
