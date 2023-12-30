import React from 'react';
import { IconStyle } from './styles.css';

const Icon = React.memo(({ children }: { children: string }) => {
  return <i className={IconStyle}>{children}</i>;
});

export default Icon;
