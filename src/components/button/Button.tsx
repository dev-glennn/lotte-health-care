import React from 'react';
import { ButtonBase } from './styles.css';
import { ContainClassName } from '../../utils/common';

type Props = {
  color?: 'purple' | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ type = 'button', color = 'purple', ...props }, ref) => {
    const customClassName = [ButtonBase({ color })];
    const { className = '' } = props;
    if (className) {
      customClassName.push(className);
    }
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={ContainClassName(customClassName)}
      />
    );
  }
);

export default Button;
