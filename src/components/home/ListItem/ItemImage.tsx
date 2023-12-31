import React from 'react';
import { ItemImageStyle } from './item.css';

export const ItemImage = React.memo(({ type }: { type: string }) => {
  return (
    <img
      className={ItemImageStyle}
      src={`https://source.unsplash.com/random/?${type}&t=${Math.random()}`}
    />
  );
});
