import { ReactNode, useMemo } from 'react';
import {
  HeaderButton,
  HeaderContainer,
  HeaderItemStyle,
  IconSize,
} from './header.css';
import { FootPointIcon, LogoutIcon, SavingIcon } from '../icon';
import { MoneyComma } from '../../utils/common';
import { useGetUserAtom } from '../../atoms/UserAtoms.atom';

const HeaderItem = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className={HeaderItemStyle}>
      {icon}
      <span className="text">{text}</span>
    </div>
  );
};

export const Header = () => {
  const userInfo = useGetUserAtom();

  const walkValue = useMemo(
    () => `${MoneyComma(userInfo?.walk || 0)} 걸음`,
    [userInfo?.walk]
  );
  const pointValue = useMemo(
    () => `${MoneyComma(userInfo?.point || 0)}원`,
    [userInfo?.point]
  );

  return (
    <div className={HeaderContainer}>
      {/* 걸음수 */}
      <HeaderItem
        icon={<FootPointIcon className={IconSize} />}
        text={walkValue}
      />
      {/* 포인트 */}
      <HeaderItem
        icon={<SavingIcon className={IconSize} />}
        text={pointValue}
      />
      {/* 로그아웃 */}
      <button className={HeaderButton}>
        <LogoutIcon className={IconSize} />
      </button>
    </div>
  );
};
