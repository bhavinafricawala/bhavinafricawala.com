/* eslint-disable no-unused-vars */
import React from 'react';
import HomePage from './components/homepage';
import NavigationBar from './components/navbar';
import BackGround from './components/background';
import Header from './components/header';

const FirstPage = () => {
  return (
  <div className="App">
  <Header/>
  <BackGround />
  <NavigationBar pagename="home" />
  <HomePage />
</div>);
};

export default FirstPage;