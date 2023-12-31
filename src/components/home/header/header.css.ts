import { style } from '@vanilla-extract/css';
import { Fonts } from '../../../styles/theme.css';

const Color = style({
  color: 'rgba(0, 0, 0, 0.6)',
});

export const HeaderContainer = style([
  {
    position: 'sticky',
    top: 0,
    left: 0,
    height: '3rem',
    width: '100%',
    background: 'rgba(255, 255, 255, 0.20)',
    backdropFilter: 'blur(2px)',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1rem',
    padding: '0 1.5rem',
    zIndex: 5,
  },
  Color,
]);

export const HeaderItemStyle = style([
  {
    position: 'relative',
    padding: '0.2rem 0.5rem',
    borderRadius: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
    background: 'rgba(238, 238, 238, 0.5)',
    backdropFilter: 'blur(2px)',
    cursor: 'default',
  },
  Fonts.CaptionBold,
]);

export const HeaderButton = style([
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1.5rem',
    height: '1.5rem',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  },
  Color,
]);

export const IconSize = style({
  fontSize: '1.5rem !important',
});
