import { style } from '@vanilla-extract/css';
import { Colors } from '../../styles/theme.css';

export const InputStyle = style({
  boxSizing: 'border-box',
  padding: '0 0.7rem',
  width: '100%',
  height: '2.5rem',
  lineHeight: 1,
  border: `1px solid ${Colors.gray}`,
  borderRadius: '0.25rem',
  fontSize: '0.85rem',
  color: Colors.black,
  textOverflow: 'ellipsis',
  boxShadow: 'inset 1px 1px 2px 0 rgba(0, 0, 0, 0.04)',
  ':focus': {
    borderColor: Colors.prime,
    outline: 'none',
  },
  '::placeholder': {
    color: '#b2b8bf',
    lineHeight: 'inherit !important',
  },
});
