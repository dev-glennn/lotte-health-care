import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';
import { PostTypes } from '../api/PostApi';

export const PostAtom = atomWithImmer<PostTypes | null>(null);

export const useGetPostAtom = () => {
  return useAtomValue(PostAtom);
};
export const useSetPostAtom = () => {
  return useSetAtom(PostAtom);
};
export const usePostAtom = () => {
  const [postInfo, setPostInfo] = useAtom(PostAtom);
  return [postInfo, setPostInfo];
};
