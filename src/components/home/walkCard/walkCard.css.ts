import { style } from '@vanilla-extract/css';
import { FontWhite } from '../../../styles/layouts.css';
import { CardShadow } from '../cardWrap/cardWrap.css';
import { Colors, Fonts } from '../../../styles/theme.css';

export const WalkCardStyle = style([
  FontWhite,
  CardShadow,
  {
    position: 'relative',
    margin: '1.14rem 1.5rem',
    width: 'calc(100% - 3rem)',
    padding: '1.5rem',
    backgroundColor: Colors.DarkBlue,
    borderRadius: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
  },
]);

export const WalkSubTitle = style([
  Fonts.Caption,
  {
    color: Colors.White_70,
  },
]);
