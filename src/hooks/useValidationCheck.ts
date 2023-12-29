export const RegExpRule: { [id: string]: RegExp } = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  korean: /^[가-힣]{2,}$/,
  english: /^[a-zA-Z]{3,}$/,
  disallowedCharacters: /[^\w가-힣]/,
};

export const useCheckValidation = (value: string, RegExp: RegExp) => {
  return RegExp.test(value);
};
