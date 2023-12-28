import { InputStyle } from './styles.css';

const Input = ({ ...props }) => {
  return <input className={InputStyle} {...props} />;
};

export default Input;
