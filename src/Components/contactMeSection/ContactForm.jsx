import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Message" rows="9" cols="50" required />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default ContactForm;
