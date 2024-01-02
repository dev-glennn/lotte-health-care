import { style } from '@vanilla-extract/css';

export const HomeContainer = style({
  position: 'relative',
  height: '100%',
  width: '100%',
  overflowY: 'auto',
  paddingBottom: '5rem',
});

export const HomeBg = style({
  position: 'absolute',
  top: 0,
  backgroundImage: 'url(/src/assets/images/home_bg.png)',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
  width: '100%',
  paddingBottom: '100%',
  zIndex: 0,
  backgroundSize: 'cover',
});
