import React from "react";
import NavigationBar from "./components/navbar";
import ContactPage from "./components/contactpage";
import Footer from "./components/footer";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="contactpost">
      <Head>
        <link rel="stylesheet" href="/static/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/App.css" />
        <link rel="stylesheet" href="/static/Contact.css" />
      </Head>
      <ContactPage />
      <NavigationBar pagename="contact" />
      <Footer />
    </div>
  );
};

export default Contact;
