import { globalStyle, style } from '@vanilla-extract/css';
import { Fonts } from '../../styles/theme.css';
import { FontWhite } from '../../styles/layouts.css';

export const LabelStyle = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1.5rem',
});

export const LabelSpan = style([Fonts.Caption, FontWhite]);

globalStyle(`${LabelStyle} > span`, {
  display: 'block',
  textAlign: 'left',
  marginBottom: '0.2rem',
});
