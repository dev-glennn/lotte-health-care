import { useMemo } from 'react';
import { useGetPostAtom } from '../../../atoms/PostAtoms.atom';
import { DrugCardWrap, ListStyle } from './drugCard.css';
import { ListItem } from '../ListItem/ListItem';
import { CardTitle } from '..';

export const DrugCard = () => {
  const getPostList = useGetPostAtom();

  const drugList = useMemo(() => {
    return getPostList?.drug;
  }, [getPostList?.drug]);

  return (
    <div className={DrugCardWrap}>
      {/* Title */}
      <CardTitle title="영양제 관리" />
      {/* List */}
      <ul className={ListStyle}>
        {drugList?.map(({ name, money, favorite }, idx) => (
          <li key={idx}>
            <ListItem
              type="drug"
              cardType="row"
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
