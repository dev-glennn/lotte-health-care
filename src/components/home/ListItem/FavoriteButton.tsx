import { HeartIcon } from '../../icon';
import { FavoriteButtonStyle } from './favoriteButton.css';

export const FavoriteButton = ({
  favorite,
  onClick,
}: {
  favorite: boolean;
  onClick: () => void;
}) => {
  return (
    <button className={FavoriteButtonStyle({ favorite })} onClick={onClick}>
      <HeartIcon />
    </button>
  );
};
