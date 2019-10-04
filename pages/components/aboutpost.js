/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const  AboutPost=()=> {
  return (
    <>
      <div className="title">
        <h1>
          ABOUT ME
        </h1>
      </div>
      <div className="text">
        <p>Hello, I'm Bhavin Africawala.</p>
        <p>
            I'm a Senior .NET Developer for
          <a
            target="_blank"
            rel="nofollow"
            className="footerlink"
            href="https://www.alluma.org/"
            style={{ color: '#00c75d', textTransform: 'uppercase', textDecoration: 'none' }}
          >

                  Alluma
          </a>
            in Sacramento, California. I have been working as a DotNet Developer for 15 yrs.
            Recently I have started learning front-end technologies like React.js and Angular.js.
            Before moving to the USA, I worked in Mumbai(
          <span style={{ fontStyle: 'italic' }}>aka:Bombay</span>
), India for 11 years.
        </p>
        <p>
              I love motorcycling, photography and traveling.
              I own a Yamaha FZ-07, which I use for escaping out of concrete jungle.
              The video you see in background of the homepage was taken enroute
              to Yosemite National Park.
        </p>
      </div>
    </>
  );
}

export default AboutPost;
