import { Colors } from './styles/theme.css';

import { style } from '@vanilla-extract/css';

export const Container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  background: Colors.black,
});

export const Content = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  margin: '0 auto',
  background: Colors.white,
  '@media': {
    'screen and (max-width: 375px)': {
      width: '100%',
    },
    'screen and (min-width: 375px)': {
      width: '375px',
    },
    'screen and (min-width: 768px)': {
      width: '768px',
    },
  },
});
