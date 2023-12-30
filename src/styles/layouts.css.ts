import { style } from '@vanilla-extract/css';
import { Colors } from './theme.css';

export const PositionAbsolute = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export const FontWhite = style({
  color: Colors.White,
});

export const BackgroundFullLogo = style([
  PositionAbsolute,
  {
    backgroundImage: 'url(/src/assets/images/background.png)',
    backgroundPosition: 'center',
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
  },
]);
