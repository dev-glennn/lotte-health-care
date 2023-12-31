import { useCallback, useMemo, useState } from 'react';
import { PostItemTypes } from '../../../api/PostApi';
import { FavoriteButton } from './FavoriteButton';
import { ItemContent } from './ItemContent';
import { ItemImage } from './ItemImage';
import {
  DirectionItemWrap,
  ImageItemWrap,
  ItemContainer,
  ItemVariations,
  RowItemWrap,
} from './item.css';
import React from 'react';

export type PickByValue<T, K extends keyof T> = T[K];

export const ListItem = React.memo(
  ({
    cardType,
    type,
    name,
    money,
    favorite,
  }: { type: string } & PostItemTypes & ItemVariations) => {
    const [customFavorite, setFavorite] = useState<boolean>(favorite);

    const CardStyle = useMemo(() => {
      if (cardType === 'direction') return DirectionItemWrap;
      if (cardType === 'image') return ImageItemWrap;
      return RowItemWrap;
    }, [cardType]);

    const handlerFavoriteClick = useCallback(() => {
      setFavorite(!customFavorite);
    }, [customFavorite]);

    return (
      <div className={CardStyle}>
        {/* 이미지 */}
        <ItemImage type={type} />
        {/* 내용 */}
        <div className={ItemContainer}>
          {/* 제목 + 금액 */}
          <ItemContent name={name} money={money} />
          {/* 좋아요 */}
          <FavoriteButton
            favorite={customFavorite}
            onClick={handlerFavoriteClick}
          />
        </div>
      </div>
    );
  }
);
