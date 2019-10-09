/* eslint-disable no-unused-vars */
import React from "react";
import HomePage from "./components/homepage";
import NavigationBar from "./components/navbar";
import BackGround from "./components/background";
import Footer from "./components/footer";
import Head from "next/head";

const FirstPage = () => {
  return (
    <div className="App">
      <Head>
        <link rel="stylesheet" href="/static/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/App.css" />
        <link rel="stylesheet" href="/static/Home.css" />
      </Head>
      <BackGround />
      <NavigationBar pagename="home" />
      <HomePage />
      <Footer />
    </div>
  );
};

export default FirstPage;
