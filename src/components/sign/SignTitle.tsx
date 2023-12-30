import { Link } from 'react-router-dom';
import { FontWhite } from '../../styles/layouts.css';
import { Fonts } from '../../styles/theme.css';
import { ContainClassName } from '../../utils/common';
import PText from '../text';
import { SignSubTitle, SignTitleStyle } from './styles.css';
import React from 'react';

const SignTitle = React.memo(
  ({
    title,
    subTitle,
    link,
    linkTo,
  }: {
    title: string;
    subTitle: string;
    link: string;
    linkTo: string;
  }) => {
    return (
      <div className={SignTitleStyle}>
        <PText className={ContainClassName([Fonts.Title, FontWhite])}>
          {title}
        </PText>
        {/* SubTitle */}
        <PText className={SignSubTitle}>
          {subTitle}
          <Link
            to={linkTo}
            className={ContainClassName([Fonts.Body, FontWhite])}
          >
            {link}
          </Link>
        </PText>
      </div>
    );
  }
);

export default SignTitle;
