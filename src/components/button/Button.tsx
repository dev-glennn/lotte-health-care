import React from 'react';
import { ButtonBase } from './styles.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ type = 'button', ...props }, ref) => {
    const customClassName = [ButtonBase];
    if (props?.className) customClassName.push(props.className);
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={customClassName.join(', ')}
      />
    );
  }
);

export default Button;

// "@vanilla-extract/css": "^1.14.0",
// "@vanilla-extract/dynamic": "^2.1.0",
// "@vanilla-extract/recipes": "^0.5.1",
// "@vanilla-extract/vite-plugin": "^3.9.3",
