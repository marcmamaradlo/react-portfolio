const SecondaryButton = ({ action, text, style, id }) => {
  return (
    <>
      <button className={style} onClick={action} id={id}>
        {text}
      </button>
    </>
  );
};

export default SecondaryButton;
