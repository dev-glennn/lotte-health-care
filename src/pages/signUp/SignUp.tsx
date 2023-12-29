import { useCallback, useEffect } from 'react';
import { Button, Input } from '../../components';
import { Sign } from '../../components/sign/Sign';
import useInput from '../../hooks/useInput';
import Label from '../../components/label';
import { LabelSpan } from '../../components/label/styles.css';
import { SignButton } from '../../components/sign/styles.css';

export const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [name, onChangeName] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    console.log({ email, name, password });
  }, [email, name, password]);

  const onSubmit = useCallback(() => {
    console.log('회원가입');
  }, []);

  return (
    <Sign.Container>
      <Sign.Title
        title="회원가입"
        subTitle="이미 회원이신가요?"
        link="로그인"
        linkTo="/signIn"
      />
      <form onSubmit={onSubmit}>
        {/* 이메일 */}
        <Label id="email-label">
          <span className={LabelSpan}>이메일</span>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="아이디를 입력해주세요"
            onChange={onChangeEmail}
          />
        </Label>
        {/* 이름 */}
        <Label id="name-label">
          <span className={LabelSpan}>이름</span>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="이름을 입력해주세요"
            onChange={onChangeName}
          />
        </Label>
        {/* 비밀번호 */}
        <Label id="password-label">
          <span className={LabelSpan}>비밀번호</span>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="8자리 이상, 영/숫자/특수문자 필수"
            onChange={onChangePassword}
          />
        </Label>
        {/* Button */}
        <Button type="submit" className={SignButton}>
          회원가입
        </Button>
      </form>
      {/* </div> */}
    </Sign.Container>
  );
};
