import LogoImage from '../../assets/images/logo.png';

export const Logo = ({ ...props }) => {
  return <img src={LogoImage} {...props} />;
};
