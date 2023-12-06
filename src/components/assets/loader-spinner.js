const LoaderSpinner = () => {
  const showLoader = () => {
    return (
      <>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  };

  return (
    <div className="loader-fullscreen">
      {showLoader()}
      <p>Please wait</p>
    </div>
  );
};

export default LoaderSpinner;
