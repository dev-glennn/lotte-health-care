import { style } from '@vanilla-extract/css';
import { Colors } from '../../../styles/theme.css';
import { PaddingTitleStyle, XScrollListWrap } from '../cardWrap/cardWrap.css';

export const FitnessCardWrap = style({
  margin: '3rem 0',
  background: Colors.Black_100,
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 0 3rem',
});

export const FitnessTitle = style([
  PaddingTitleStyle,
  {
    border: '0 !important',
    color: Colors.White,
  },
]);

export const FitnessListWrap = style([
  XScrollListWrap,
  {
    gap: '0.5rem',
  },
]);
