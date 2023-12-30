import { FormEvent, useCallback, useMemo } from 'react';
import { Button, Input } from '../../components';
import { Sign } from '../../components/sign/Sign';
import useInput from '../../hooks/useInput';
import {
  SignButton,
  LabelSpan,
  LabelStyle,
} from '../../components/sign/styles.css';
import PText from '../../components/text';
import { ValidateCaption } from './styles.css';
import { RegExpRule, useCheckValidation } from '../../hooks/useValidationCheck';
import { useNavigate } from 'react-router';
import { AuthSignUp } from '../../api/AuthAPI';

export const SignUp = () => {
  // data
  const navigate = useNavigate();
  const checkValidation = useCheckValidation;
  const [email, onChangeEmail] = useInput<string>('');
  const [name, onChangeName] = useInput<string>('');
  const [password, onChangePassword] = useInput<string>('');

  // validation check
  const validEmail = useMemo(() => {
    if (email && !checkValidation(email, RegExpRule.email)) {
      return '올바른 이메일 주소를 입력해주세요';
    }
    return false;
  }, [checkValidation, email]);

  const validName = useMemo(() => {
    if (
      !name ||
      ((checkValidation(name, RegExpRule.korean) ||
        checkValidation(name, RegExpRule.english)) &&
        !checkValidation(name, RegExpRule.disallowedCharacters))
    ) {
      return false;
    }
    return '2글자 이상 한글 완성형, 3글자 이상 영문을 입력해주세요';
  }, [checkValidation, name]);

  const validPassword = useMemo(() => {
    if (password && !checkValidation(password, RegExpRule.password)) {
      return '8자 이상의 영문 대소문자, 숫자, 특수문자를 포함해주세요';
    }
    return false;
  }, [checkValidation, password]);

  const validSubmit = useMemo(() => {
    return (
      !!email &&
      !!password &&
      !!name &&
      !validEmail &&
      !validName &&
      !validPassword
    );
  }, [email, name, password, validEmail, validName, validPassword]);

  // actions
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const handlerSignUp = async () => {
        try {
          await AuthSignUp({ email, password, name });
          alert('회원가입이 완료되었어요!');
          navigate('/signIn');
        } catch (e) {
          if (e instanceof Error) {
            if (e?.message) {
              alert(e.message);
            }
          }
        }
      };
      handlerSignUp();
    },
    [email, name, navigate, password]
  );

  // render
  return (
    <Sign.Container>
      <Sign.Title
        title="회원가입"
        subTitle="이미 회원이신가요?"
        link="로그인"
        linkTo="/signIn"
      />
      <form onSubmit={onSubmit}>
        {/* 아이디 */}
        <label id="email-label" className={LabelStyle}>
          <span className={LabelSpan}>아이디</span>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="이메일을 입력해주세요"
            onChange={onChangeEmail}
          />
          {validEmail && (
            <PText id="email-validation" className={ValidateCaption}>
              {validEmail}
            </PText>
          )}
        </label>
        {/* 비밀번호 */}
        <label id="password-label" className={LabelStyle}>
          <span className={LabelSpan}>비밀번호</span>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="8자리 이상, 영/숫자/특수문자 필수"
            onChange={onChangePassword}
          />
          {validPassword && (
            <PText id="password-validation" className={ValidateCaption}>
              {validPassword}
            </PText>
          )}
        </label>
        {/* 이름 */}
        <label id="name-label" className={LabelStyle}>
          <span className={LabelSpan}>이름</span>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="이름을 입력해주세요"
            onChange={onChangeName}
          />
          {validName && (
            <PText id="name-validation" className={ValidateCaption}>
              {validName}
            </PText>
          )}
        </label>
        {/* Button */}
        <Button type="submit" disabled={!validSubmit} className={SignButton}>
          회원가입
        </Button>
      </form>
      {/* </div> */}
    </Sign.Container>
  );
};
