import { style } from '@vanilla-extract/css';
import { Colors, Fonts } from '../../styles/theme.css';

export const SignUpContent = style({
  position: 'relative',
  width: '100%',
});

export const ValidateCaption = style([
  Fonts.Caption,
  {
    color: Colors.Pink,
    marginTop: '0.6rem',
    ':before': {
      content: '* ',
    },
  },
]);
