import React from 'react';
import { InputStyle } from './styles.css';

const Input = React.memo(
  ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input className={InputStyle} {...props} />;
  }
);

export default Input;
