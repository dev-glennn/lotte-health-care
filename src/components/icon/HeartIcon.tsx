export const HeartIcon = ({ ...props }) => {
  return (
    <span className={['material-symbols-outlined', props.className].join(' ')}>
      favorite
    </span>
  );
};
