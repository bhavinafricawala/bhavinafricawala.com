/* eslint-disable no-unused-vars */
import React from 'react';
import HomePage from './components/homepage';
import NavigationBar from './components/navbar';
import BackGround from './components/background';

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
</div>);
};

export default FirstPage;