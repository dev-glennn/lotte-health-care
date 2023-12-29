import { style } from '@vanilla-extract/css';
import { Colors, Fonts } from '../../styles/theme.css';

export const InputStyle = style([
  {
    boxSizing: 'border-box',
    padding: '0 1.17rem',
    width: '100%',
    height: '3rem',
    lineHeight: 1,
    color: Colors.White,
    backgroundColor: `rgba(255, 255, 255, 0.2)`,
    border: `1px solid ${Colors.Gray_Light}`,
    textOverflow: 'ellipsis',
    boxShadow: 'inset 1px 1px 2px 0 rgba(0, 0, 0, 0.04)',
    ':focus': {
      borderColor: Colors.Purple,
      outline: 'none',
    },
    '::placeholder': {
      color: Colors.White_70,
      lineHeight: 'inherit !important',
    },
  },
  Fonts.Body,
]);
