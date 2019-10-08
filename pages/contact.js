import React from 'react';
import NavigationBar from './components/navbar';
import Head from 'next/head';


const Contact =()=>{
    return(
    <div>
        <Head>
            <link rel="stylesheet" href="/static/bootstrap.min.css" />
            <link rel="stylesheet" href="/static/App.css" />        
            <link rel="stylesheet" href="/static/Home.css" />
        </Head>
    <NavigationBar pagename="about" />
    </div>);
}

export default Contact;