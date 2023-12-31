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

const letterSpacing = style({
  letterSpacing: '-0.03rem',
});

export const Fonts = {
  Title: style([
    letterSpacing,
    {
      fontSize: '1.7rem',
      fontWeight: 700,
      fontStyle: 'normal',
    },
  ]),
  SubTitle: style([
    letterSpacing,
    {
      fontSize: '1.5rem',
      fontWeight: 700,
      fontStyle: 'normal',
    },
  ]),
  Header: style([
    letterSpacing,
    {
      fontSize: '1.3rem',
      fontWeight: 700,
      fontStyle: 'normal',
    },
  ]),
  BodyBold: style([
    Body,
    letterSpacing,
    {
      fontWeight: 600,
    },
  ]),
  Body: style([
    Body,
    letterSpacing,
    {
      fontWeight: 400,
    },
  ]),
  CaptionBold: style([
    letterSpacing,
    Caption,
    {
      fontWeight: 700,
    },
  ]),
  Caption: style([
    letterSpacing,
    Caption,
    {
      fontWeight: 400,
    },
  ]),
};
