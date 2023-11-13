const PrimaryButton = ({ action, text, style }) => {
  return (
    <>
      <button
        className={style}
        onClick={action}
      >{text}</button>
    </>
  )
}