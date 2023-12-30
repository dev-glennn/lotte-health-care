import { ReactNode } from 'react';
import { SignContainerStyle, SignLogo } from './styles.css';
import { BackgroundFullLogo } from '../../styles/layouts.css';
import { Logo } from '../logo/Logo';

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

export default SignContainer;
