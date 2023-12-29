import { ReactNode } from 'react';
import { Logo } from '../logo/Logo';
import {
  SignContainerStyle,
  SignLogo,
  SignSubTitle,
  SignTitleStyle,
} from './styles.css';
import { BackgroundFullLogo, FontWhite } from '../../styles/layouts.css';
import PText from '../text';
import { ContainClassName } from '../../utils/common';
import { Fonts } from '../../styles/theme.css';
import { Link } from 'react-router-dom';

const SignTitle = ({
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
        <Link to={linkTo} className={ContainClassName([Fonts.Body, FontWhite])}>
          {link}
        </Link>
      </PText>
    </div>
  );
};

const SignContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={SignContainerStyle}>
      {/* Background */}
      <div className={BackgroundFullLogo}></div>
      {/* Children */}
      {children}
      {/* Logo */}
      <Logo className={SignLogo} />
    </div>
  );
};

export const Sign = {
  Container: SignContainer,
  Title: SignTitle,
};
