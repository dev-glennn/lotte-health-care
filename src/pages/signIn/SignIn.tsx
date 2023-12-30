import { FormEvent, useCallback } from 'react';
import useInput from '../../hooks/useInput';
import { Button, Input } from '../../components';
import {
  SignButton,
  LabelSpan,
  LabelStyle,
} from '../../components/sign/styles.css';
import { AuthSignIn } from '../../api/AuthAPI';
import { useNavigate } from 'react-router';
import Sign from '../../components/sign';

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput<string>('');
  const [password, onChangePassword] = useInput<string>('');

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const handlerSignIn = async () => {
        try {
          const { accessToken } = await AuthSignIn({ email, password });
          if (!accessToken) {
            throw new Error('다시 시도해주세요');
          }
          localStorage.setItem('uuid', accessToken);
          navigate('/home');
        } catch (e) {
          if (e instanceof Error) {
            if (e?.message) {
              alert(e.message);
            }
          }
        }
      };
      handlerSignIn();
    },
    [email, navigate, password]
  );

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
        <label id="email-label" className={LabelStyle}>
          <span className={LabelSpan}>아이디</span>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="이메일을 입력"
            onChange={onChangeEmail}
          />
        </label>
        {/* 이메일 */}
        <label id="password-label" className={LabelStyle}>
          <span className={LabelSpan}>비밀번호</span>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력"
            value={password}
            onChange={onChangePassword}
          />
        </label>
        {/* Button */}
        <Button type="submit" className={SignButton}>
          이메일로 로그인
        </Button>
      </form>
    </Sign.Container>
  );
};
