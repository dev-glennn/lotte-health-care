import { RegExpRule, useCheckValidation } from '../hooks/useValidationCheck';
const checkValidation = useCheckValidation;

type PostSignUpParams = {
  email: string;
  name: string;
  password: string;
};

/**
 * 회원가입 API
 * @param params PostSignUpParams
 * @returns {boolean} true or throw Error
 */
export const PostSignUp = async (params: PostSignUpParams) => {
  const { email, name, password } = params;
  // 이메일 유효성 체크
  if (!email) {
    throw new Error('이메일 주소를 입력해주세요');
  } else if (!checkValidation(email, RegExpRule.email)) {
    throw new Error('올바른 이메일 주소를 입력해주세요');
  } else if (await FindEmail(email)) {
    throw new Error('이미 가입한 이메일이에요');
  }
  // 비밀번호 유효성 체크
  if (!params.password) {
    throw new Error('비밀번호를 입력해주세요');
  } else if (!checkValidation(password, RegExpRule.password)) {
    throw new Error('8자 이상의 영문 대소문자, 숫자, 특수문자를 포함해주세요');
  }
  // 이름 유효성 체크
  if (!name) {
    throw new Error('이름을 입력해주세요');
  } else if (
    !(
      (checkValidation(name, RegExpRule.korean) ||
        checkValidation(name, RegExpRule.english)) &&
      !checkValidation(name, RegExpRule.disallowedCharacters)
    )
  ) {
    throw new Error('2글자 이상 한글 완성형, 3글자 이상 영문을 입력해주세요');
  }
  return true;
};

/**
 * 이메일로 가입된 계정을 찾는 API
 * @param email string
 * @returns PostSignUpParams
 */
export const FindEmail = async (email: string) => {
  const loginData = await fetch('/public/data/loginData.json').then((res) =>
    res.json()
  );
  return loginData.find((user: PostSignUpParams) => user.email === email);
};

/**
 * 로그인 API
 * @param params PostSignUpParams
 * @returns {boolean} true | error
 */
export const GetLogin = async (
  params: Pick<PostSignUpParams, 'email' | 'password'>
) => {
  const { email, password } = params;
  const loginData = await fetch('/public/data/loginData.json').then((res) =>
    res.json()
  );
  const isAuth = loginData.find(
    (user: PostSignUpParams) =>
      user.email === email && user.password === password
  );
  if (!isAuth) {
    throw new Error('일치하는 계정이 존재하지 않아요!');
  }
  return true;
};
