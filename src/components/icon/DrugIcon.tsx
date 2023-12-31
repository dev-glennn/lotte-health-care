export const DrugIcon = ({ ...props }) => {
  return (
    <span className={['material-symbols-outlined', props.className].join(' ')}>
      pill
    </span>
  );
};
