import { useMemo } from 'react';
import { useGetPostAtom } from '../../../atoms/PostAtoms.atom';
import { ListItem } from '../ListItem/ListItem';
import { CardTitle } from '..';
import {
  FitnessCardWrap,
  FitnessListWrap,
  FitnessTitle,
} from './fitnessCard.css';
import { FitnessIcon } from '../../icon';

export const FitnessCard = () => {
  const getPostList = useGetPostAtom();

  const fitnessList = useMemo(() => {
    return getPostList?.fitness;
  }, [getPostList?.fitness]);

  return (
    <div className={FitnessCardWrap}>
      <CardTitle
        icon={<FitnessIcon />}
        className={FitnessTitle}
        title="피트니스 상품"
      />
      <ul className={FitnessListWrap}>
        {fitnessList?.map(({ name, money, favorite }, idx) => (
          <li key={idx}>
            <ListItem
              type="fitness"
              cardType="image"
              name={name}
              money={money}
              favorite={favorite}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
