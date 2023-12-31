import { style } from '@vanilla-extract/css';
import { Colors, Fonts } from '../../../styles/theme.css';

export const CustomHeaderTitle = style([
  {
    position: 'relative',
    padding: '3rem 1.5rem',
    maxWidth: '13rem',
    lineHeight: 'normal',
    color: Colors.Black,
  },
  Fonts.SubTitle,
]);
