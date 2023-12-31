export const FoodIcon = ({ ...props }) => {
  return (
    <span className={['material-symbols-outlined', props.className].join(' ')}>
      restaurant
    </span>
  );
};
