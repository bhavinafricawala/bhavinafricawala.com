/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ContactPage = () => {
  return (
    <div className="contactpost">
      <div className="title">
        <h1>CONTACT</h1>
      </div>
      <p>Feel free to contact me through email at</p>
      <p>
        <a
          style={{ color: "#f2c50f" }}
          href="mailto:bhavinafricawala@gmail.com">
          bhavinafricawala@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
