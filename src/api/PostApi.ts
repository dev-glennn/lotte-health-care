export type PostItemTypes = {
  name: string;
  money: number;
  favorite: boolean;
};

export type PostTypes = { [key: string]: PostItemTypes[] };

export const GetPostList = async () => {
  return await fetch('/public/data/postData.json').then((res) => res.json());
};
