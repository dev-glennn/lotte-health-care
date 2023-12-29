import { HTMLAttributes, ReactNode } from 'react';

const PText = ({
  children,
  ...props
}: { children?: ReactNode } & HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...props}>{children}</p>;
};

export default PText;
