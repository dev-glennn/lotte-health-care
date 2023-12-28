import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { SignUp } from '../pages/signUp/SignUp';
import { SignIn } from '../pages/signIn/SignIn';
import { AuthRoutes } from '../components/router/AuthRouter';
import NotFound from './NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Private Route */}
      <Route element={<AuthRoutes />}>
        {/* 홈 */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        {/* 회원가입 */}
        <Route path="/signUp" element={<SignUp />} />
        {/* 로그인 */}
        <Route path="/signIn" element={<SignIn />} />
      </Route>
      {/* Public Route */}
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
