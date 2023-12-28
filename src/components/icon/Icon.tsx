import { IconStyle } from './styles.css';

const Icon = ({ children }: { children: string }) => {
  return <i className={IconStyle}>{children}</i>;
};

export default Icon;
