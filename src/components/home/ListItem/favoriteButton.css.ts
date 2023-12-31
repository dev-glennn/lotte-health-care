import { Colors } from '../../../styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const FavoriteButtonStyle = recipe({
  base: {
    width: '2rem',
    height: '2rem',
    borderRadius: '2rem',
    backgroundColor: Colors.White,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.2rem',
    boxShadow: '1px 1px 3px 0px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    zIndex: 1,
  },
  variants: {
    favorite: {
      true: {
        color: Colors.Pink,
      },
      false: {
        color: Colors.Gray,
      },
    },
  },
  defaultVariants: {
    favorite: false,
  },
});
