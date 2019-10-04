import React from 'react';
import Head from 'next/head';

const Header =()=>{
    return ( <Head>
        <link rel="stylesheet" href="/static/App.css" />
        <link rel="stylesheet" href="/static/About.css" />
        <link rel="stylesheet" href="/static/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/Contact.css" />
        <link rel="stylesheet" href="/static/Home.css" />
        <link rel="stylesheet" href="/static/index.css" />
    </Head>);
}

export default Header;