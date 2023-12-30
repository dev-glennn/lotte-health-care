import React from 'react';
import LogoImage from '../../assets/images/logo.png';

export const Logo = React.memo(
  ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img src={LogoImage} {...props} />;
  }
);
