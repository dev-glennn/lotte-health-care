import { Button, Input } from '../../components';
import PText from '../../components/text/PText';
import { SignUpContainer, SignUpContent } from './styles.css';

export const SignUp = () => {
  return (
    <div className={SignUpContainer}>
      <div className={SignUpContent}>
        <PText>회원가입</PText>
        이름
        <Input />
        이메일
        <Input />
        비밀번호
        <Input />
        <Button>회원가입</Button>
      </div>
    </div>
  );
};
