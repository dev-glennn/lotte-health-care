import React from 'react';
import { PostItemTypes } from '../../../api/PostApi';
import { MoneyComma } from '../../../utils/common';
import PText from '../../text';
import {
  ItemContentStyle,
  ItemMoneyStyle,
  ItemMoneyWrapStyle,
  ItemTitleStyle,
} from './item.css';

export const ItemContent = React.memo(
  ({ name, money }: Pick<PostItemTypes, 'name' | 'money'>) => {
    return (
      <div className={ItemContentStyle}>
        <PText className={ItemTitleStyle}>{name}</PText>
        <PText className={ItemMoneyWrapStyle}>
          <span className={ItemMoneyStyle}>{MoneyComma(money)}</span>원
        </PText>
      </div>
    );
  }
);
