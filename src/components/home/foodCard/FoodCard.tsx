import { useMemo } from 'react';
import { useGetPostAtom } from '../../../atoms/PostAtoms.atom';
import { ListItem } from '../ListItem/ListItem';
import { CardTitle } from '..';
import { FoodIcon } from '../../icon';
import { FoodCardWrap, FoodItemStyle, FoodListStyle } from './foodCard.css';
import { PaddingTitleStyle } from '../cardWrap/cardWrap.css';

export const FoodCard = () => {
  const getPostList = useGetPostAtom();

  const foodCard = useMemo(() => {
    return getPostList?.food;
  }, [getPostList?.food]);

  return (
    <div className={FoodCardWrap}>
      <CardTitle
        className={PaddingTitleStyle}
        icon={<FoodIcon />}
        title="영양 보조식품"
      />
      <ul className={FoodListStyle}>
        {foodCard?.map(({ name, money, favorite }, idx) => (
          <li key={idx} className={FoodItemStyle}>
            <ListItem
              type="food"
              cardType="direction"
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
