import { FormEvent, useCallback, useMemo } from 'react';
import { Button, Input } from '../../components';
import { Sign } from '../../components/sign/Sign';
import useInput from '../../hooks/useInput';
import Label from '../../components/label';
import { LabelSpan } from '../../components/label/styles.css';
import { SignButton } from '../../components/sign/styles.css';
import PText from '../../components/text';
import { ValidateCaption } from './styles.css';
import { RegExpRule, useCheckValidation } from '../../hooks/useValidationCheck';
import { useNavigate } from 'react-router';

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
    return !validEmail && !validName && !validPassword;
  }, [validEmail, validName, validPassword]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    [email, name, navigate, password]
  );
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
          {validEmail && (
            <PText id="email-validation" className={ValidateCaption}>
              {validEmail}
            </PText>
          )}
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
          {validName && (
            <PText id="name-validation" className={ValidateCaption}>
              {validName}
            </PText>
          )}
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
          {validPassword && (
            <PText id="password-validation" className={ValidateCaption}>
              {validPassword}
            </PText>
          )}
        </Label>
        {/* Button */}
        <Button type="submit" disabled={!validSubmit} className={SignButton}>
          회원가입
        </Button>
      </form>
      {/* </div> */}
    </Sign.Container>
  );
};
