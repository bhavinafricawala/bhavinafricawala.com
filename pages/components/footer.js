/* eslint-disable react/jsx-no-target-blank */
import React from 'react';


const FooterLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/bafricawala',
    color: '#00aced',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/the.africawala/',
    color: '#833ab4',
  },
  {
    name: 'Github',
    link: 'https://github.com/bhavinafricawala',
    color: '#4183c4',
  },
];


const Footer=()=> {
  return (
    <footer className="footer">
      <div className="fooderheader">
        <h3>Find Me At</h3>
      </div>
      <br />
      <div className="menu-outer">
        <div className="table">
          <ul className="horizontal-list">
            {FooterLinks.map((link) => (
              <li key={link.name}>
                <a
                  target="_blank"
                  rel="nofollow"
                  className="footerlink"
                  href={link.link}
                  style={{ backgroundColor: link.color }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
