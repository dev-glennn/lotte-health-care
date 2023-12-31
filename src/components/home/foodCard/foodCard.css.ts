import { style } from '@vanilla-extract/css';
import { CardShadow, XScrollListWrap } from '../cardWrap/cardWrap.css';

export const FoodCardWrap = style({
  margin: '3rem 0',
});

export const FoodListStyle = style([
  XScrollListWrap,
  {
    gap: '1rem',
  },
]);

export const FoodItemStyle = style([
  CardShadow,
  {
    width: '15rem',
    display: 'inline-block',
    overflow: 'hidden',
    height: 'max-content',
    flexShrink: 0,
    borderRadius: '0.5rem',
    marginBottom: '1rem',
  },
]);
