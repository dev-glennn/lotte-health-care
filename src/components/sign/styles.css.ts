import { globalStyle, style } from '@vanilla-extract/css';
import { Fonts } from '../../styles/theme.css';
import { FontWhite } from '../../styles/layouts.css';

export const SignContainerStyle = style({
  flex: 1,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2.5rem',
  position: 'relative',
});

globalStyle(`${SignContainerStyle} > *`, {
  width: '100%',
  zIndex: 1,
});

export const SignLogo = style({
  position: 'absolute',
  bottom: '5.57rem',
  height: '1.5rem',
  objectFit: 'contain',
});

export const SignTitleStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const SignSubTitle = style([
  Fonts.Body,
  FontWhite,
  {
    display: 'flex',
    gap: '0.2rem',
    alignItems: 'center',
    marginBottom: '3rem',
  },
]);

export const SignButton = style({
  marginTop: '3rem',
});
