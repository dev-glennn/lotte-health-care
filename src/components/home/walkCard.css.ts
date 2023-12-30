import { style } from '@vanilla-extract/css';
import { Colors, Fonts } from '../../styles/theme.css';
import { FontWhite } from '../../styles/layouts.css';

export const WalkCardStyle = style([
  FontWhite,
  {
    margin: '1.14rem 1.5rem',
    width: 'calc(100% - 3rem)',
    padding: '1.5rem',
    backgroundColor: Colors.DarkBlue,
    borderRadius: '1.5rem',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.5)',
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
