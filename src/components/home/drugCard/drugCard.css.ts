import { style } from '@vanilla-extract/css';
import { CardShadow } from '../cardWrap/cardWrap.css';
import { Colors } from '../../../styles/theme.css';

export const DrugCardWrap = style([
  CardShadow,
  {
    width: 'calc(100% - 3rem)',
    margin: '4.5rem auto 0',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    borderRadius: '1.5rem',
    backgroundColor: Colors.White,
  },
]);

export const ListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});
