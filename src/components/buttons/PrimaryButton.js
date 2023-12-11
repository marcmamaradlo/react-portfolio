const PrimaryButton = ({ action, text, style, id }) => {
  return (
    <>
      <button className={style} onClick={action} id={id || text}>
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;
