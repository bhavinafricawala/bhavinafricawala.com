/* eslint-disable no-unused-vars */
import React from 'react';
import HomePage from './components/homepage';
import NavigationBar from './components/navbar';
import BackGround from './components/background';
import './stylesheets/App.css';
import './stylesheets/bootstrap.min.css';
import './stylesheets/Home.css';


const FirstPage = () => {
  return (<div className="App">
  <BackGround />
  <NavigationBar pagename="home" />
  <HomePage />
</div>);
};

export default FirstPage;