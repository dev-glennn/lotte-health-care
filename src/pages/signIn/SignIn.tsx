import { FormEvent, useCallback } from 'react';
import { LabelSpan } from '../../components/label/styles.css';
import Label from '../../components/label';
import { Button, Input } from '../../components';
import Sign from '../../components/sign';
import useInput from '../../hooks/useInput';
import { SignButton } from '../../components/sign/styles.css';

export const SignIn = () => {
  const [email, onChangeEmail] = useInput<string>('');
  const [password, onChangePassword] = useInput<string>('');

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <Sign.Container>
      <Sign.Title
        title="로그인"
        subTitle="아직 계정이 없으신가요?"
        link="회원가입"
        linkTo="/signUp"
      />
      <form onSubmit={onSubmit}>
        {/* 이메일 */}
        <Label id="email-label">
          <span className={LabelSpan}>아이디</span>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="이메일을 입력"
            onChange={onChangeEmail}
          />
        </Label>
        {/* 이메일 */}
        <Label id="password-label">
          <span className={LabelSpan}>비밀번호</span>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력"
            onChange={onChangePassword}
          />
        </Label>
        {/* Button */}
        <Button type="submit" className={SignButton}>
          이메일로 로그인
        </Button>
      </form>
    </Sign.Container>
  );
};
