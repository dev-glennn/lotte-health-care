import { style } from '@vanilla-extract/css';
import { Colors, Fonts } from '../../../styles/theme.css';

export const CardShadow = style({
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
});

export const CardTitleStyle = style([
  Fonts.Header,
  {
    marginBottom: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${Colors.Gray_Light}`,
  },
]);

export const CardTitleIconWrap = style([
  {
    background: Colors.Black,
    color: Colors.White,
    borderRadius: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.7rem',
    height: '1.7rem',
    padding: '0.2rem',
  },
]);

export const PaddingTitleStyle = style({
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
});

export const XScrollListWrap = style({
  display: 'flex',
  overflowX: 'auto',
  ':before': {
    display: 'inline-block',
    content: '',
    width: '1px',
    height: '1px',
    flexShrink: 0,
  },
  ':after': {
    display: 'inline-block',
    content: '',
    width: '1px',
    height: '1px',
    flexShrink: 0,
  },
});
