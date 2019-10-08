import React from 'react';
import NavigationBar from './components/navbar';
import AboutPost from './components/aboutpost';
import Resume from './components/resume';
import Head from 'next/head';

const About = () => {
    
    return(
    <div className="aboutpage">
        <Head>
            <link rel="stylesheet" href="/static/bootstrap.min.css" />
            <link rel="stylesheet" href="/static/App.css" />        
            <link rel="stylesheet" href="/static/About.css" />
        </Head>
        <NavigationBar pagename="about" />
        <div className="post">
            <AboutPost />
            <Resume />
        </div>
    </div>);
}

export default About;