const SecondaryButton = ({ action, text, style, id, type }) => {
  return (
    <>
      <button className={style} type={type} onClick={action} id={id}>
        {text}
      </button>
    </>
  );
};

export default SecondaryButton;
