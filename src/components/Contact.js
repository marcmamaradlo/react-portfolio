import SecondaryButton from "./buttons/SecondaryButton";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="contact">
        <h2>{`<Contact/>`}</h2>
        <div className="contact-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Imperdiet massa tincidunt nunc pulvinar sapien et ligula
            ullamcorper. Etiam dignissim diam quis enim lobortis.
          </p>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" placeholder="John Doe" />
            <label>Email Address</label>
            <input text="email" placeholder="eddress@email.mail" />
            <label>Your Message</label>
            <textarea />
            <div>
              <SecondaryButton text="Send" style={`contact-button`} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
