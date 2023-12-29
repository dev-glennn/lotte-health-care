import { recipe } from '@vanilla-extract/recipes';
import { Colors, Fonts } from '../../styles/theme.css';

export const ButtonBase = recipe({
  base: [
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '3rem',
      padding: '0 1rem',
      borderRadius: '1.5rem',
      textAlign: 'center',
      border: 'none',
      boxShadow:
        '0 0 1px rgba(67, 90, 111, 0.03), 0 2px 2px -2px rgba(67, 90, 111, 0.2)',
      cursor: 'pointer',
      ':disabled': {
        opacity: 0.7,
      },
    },
    Fonts.BodyBold,
  ],
  variants: {
    color: {
      purple: {
        backgroundColor: Colors.Purple,
        color: Colors.White,
      },
    },
  },
  defaultVariants: {
    color: 'purple',
  },
});
