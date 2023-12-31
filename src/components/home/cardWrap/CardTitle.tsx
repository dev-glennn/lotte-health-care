import { HTMLAttributes, ReactNode } from 'react';
import { CardTitleIconWrap, CardTitleStyle } from './cardWrap.css';
import { ContainClassName } from '../../../utils/common';

export const CardTitle = ({
  icon,
  title,
  ...props
}: {
  icon?: ReactNode;
  title: string;
} & HTMLAttributes<HTMLDivElement>) => {
  const CardClass = [CardTitleStyle];
  if (props?.className) {
    CardClass.push(props.className);
  }
  return (
    <div className={ContainClassName(CardClass)}>
      {icon && <div className={CardTitleIconWrap}>{icon}</div>}
      <span>{title}</span>
    </div>
  );
};
