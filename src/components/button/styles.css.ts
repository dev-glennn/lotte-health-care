import { style } from '@vanilla-extract/css';
import { Colors } from '../../styles/theme.css';

export const ButtonBase = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '3rem',
  padding: '0 1rem',
  border: `1px solid ${Colors.black}`,
  borderRadius: '0.5rem',
  textAlign: 'center',
  boxShadow:
    '0 0 1px rgba(67, 90, 111, 0.03), 0 2px 2px -2px rgba(67, 90, 111, 0.2)',
  cursor: 'pointer',
});
