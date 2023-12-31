import { useGetUserAtom } from '../../../atoms/UserAtoms.atom';
import { FontPurple } from '../../../styles/layouts.css';
import { CustomHeaderTitle } from './customTitle.css';

export const CustomTitle = () => {
  const userInfo = useGetUserAtom();
  return (
    <div className={CustomHeaderTitle}>
      {userInfo?.name}님,
      <br />
      <span className={FontPurple}>맞춤 건강정보</span>를 확인해보세요!
    </div>
  );
};
