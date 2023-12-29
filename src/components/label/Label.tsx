import { LabelHTMLAttributes, ReactNode } from 'react';
import { LabelStyle } from './styles.css';

const Label = ({
  children,
  ...props
}: { children?: ReactNode } & LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={LabelStyle} {...props}>
      {children}
    </label>
  );
};

export default Label;
