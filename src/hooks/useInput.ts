import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

type InitialData = any;
type Handler = (e: ChangeEvent<HTMLInputElement>) => void;
type ReturnTypes<T = InitialData> = [T, Handler, Dispatch<SetStateAction<T>>];

const useInput = <T = InitialData>(initialData: T): ReturnTypes => {
  const [value, setValue] = useState(initialData);
  const handler: Handler = useCallback((e) => {
    setValue(e.target.value as T);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
