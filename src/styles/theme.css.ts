import { style } from '@vanilla-extract/css';

export const Colors = {
  White: '#FFFFFF',
  White_70: 'rgba(255, 255, 255, 0.7)',
  Blue: '#5C63FF',
  DarkBlue: '#4048E2',
  Black: '#010101',
  Black_100: '#000000',
  Gray: '#b6b6b6',
  Gray_Light: 'rgba(224, 228, 234, 0.2)',
  Pink: '#FF5C83',
  Purple: '#675CFF',
  Purple_Dark: '574BFF',
};

const Body = style({
  fontSize: '1rem',
  fontStyle: 'normal',
});

const Caption = style({
  fontSize: '0.85rem',
  fontStyle: 'normal',
});

export const Fonts = {
  Title: style({
    fontSize: '1.7rem',
    fontWeight: 700,
    fontStyle: 'normal',
  }),
  SubTitle: style({
    fontSize: '1.5rem',
    fontWeight: 700,
    fontStyle: 'normal',
  }),
  BodyBold: style([
    Body,
    {
      fontWeight: 600,
    },
  ]),
  Body: style([
    Body,
    {
      fontWeight: 400,
    },
  ]),
  CaptionBold: style([
    Caption,
    {
      fontWeight: 700,
    },
  ]),
  Caption: style([
    Caption,
    {
      fontWeight: 400,
    },
  ]),
};
