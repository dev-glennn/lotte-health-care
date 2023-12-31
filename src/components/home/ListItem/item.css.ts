import { style } from '@vanilla-extract/css';
import { Colors, Fonts } from '../../../styles/theme.css';

export const ItemStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.5rem',
  overflow: 'hidden',
});

export const RowItemWrap = style([
  ItemStyle,
  {
    height: '4.5rem',
    width: '100%',
  },
]);

export const DirectionItemWrap = style([
  ItemStyle,
  {
    height: 'max-content',
    width: '100%',
    flexDirection: 'column',
  },
]);

export const ImageItemWrap = style([
  ItemStyle,
  {
    height: '25rem',
    width: '20rem',
  },
]);

export type ItemVariations = { cardType: 'row' | 'direction' | 'image' };

export const ItemContainer = style({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.25rem',
  overflow: 'hidden',
  width: '100%',
  selectors: {
    [`${RowItemWrap} &`]: {
      height: '100%',
    },
    [`${DirectionItemWrap} &`]: {
      padding: '0.5rem 1rem',
    },
    [`${ImageItemWrap} &`]: {
      alignSelf: 'flex-end',
      padding: '1rem',
    },
  },
});

export const ItemImageStyle = style({
  objectFit: 'cover',
  selectors: {
    [`${RowItemWrap} &`]: {
      width: '4.5rem',
      height: '4.5rem',
      borderRadius: '0.25rem',
    },
    [`${DirectionItemWrap} &`]: {
      width: '100%',
      height: '10rem',
      borderRadius: '0.25rem',
    },
    [`${ImageItemWrap} &`]: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    },
  },
});

export const ItemContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  overflow: 'hidden',
  zIndex: 1,
  width: '100%',
  selectors: {
    [`${ImageItemWrap} &`]: {
      color: Colors.White,
    },
  },
});

export const ItemTitleStyle = style([
  Fonts.Body,
  {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
]);

export const ItemMoneyWrapStyle = style([Fonts.Caption, {}]);

export const ItemMoneyStyle = style([Fonts.Header, {}]);
