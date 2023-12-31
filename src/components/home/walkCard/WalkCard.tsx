import { useMemo } from 'react';
import { useGetUserAtom } from '../../../atoms/UserAtoms.atom';
import { MoneyComma } from '../../../utils/common';
import PText from '../../text';
import { WalkCardStyle, WalkSubTitle } from './walkCard.css';
import { Fonts } from '../../../styles/theme.css';

export const WalkCard = () => {
  const userInfo = useGetUserAtom();
  const goal = 7000;

  const walk = useMemo(() => {
    return userInfo?.walk || 0;
  }, [userInfo?.walk]);

  const walkText = useMemo(() => {
    return MoneyComma(walk);
  }, [walk]);

  const restWalk = useMemo(() => {
    return goal - walk;
  }, [walk]);

  return (
    <div className={WalkCardStyle}>
      <div>
        <span className={Fonts.SubTitle}>{walkText}</span>
        <span className={Fonts.Caption}> 걸음</span>
      </div>
      <PText className={WalkSubTitle}>
        {/* 목표걸음 도달 */}
        {restWalk === 0 && <>{goal}걸음 목표를 달성했어요!</>}
        {/* 목표걸음 미달 */}
        {restWalk > 0 && (
          <>
            {goal}걸음까지 {restWalk}걸음 남았어요!
          </>
        )}
        {/* 목표걸음 초과 */}
        {restWalk < 0 && (
          <>목표걸음보다 {Math.abs(restWalk)}걸음 더 걸었어요!</>
        )}
      </PText>
    </div>
  );
};
