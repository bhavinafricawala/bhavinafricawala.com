import React from 'react';



const HomePage=() => {
  return (
    <div className="homepost">
      <div>
        <h1>I am Bhavin Africawala</h1>
      </div>
      <div>
        <h5>I make modern website with Front-End Technologies and C#</h5>
      </div>
      <style jsx>{`
      body{
        background: #273552;
      }
      .homepost {
        color: #ffffff;
        display: grid;
        max-width: 1000px;
        margin: 150px auto;
        grid-gap: 10px 50px;
        grid-template-columns: 1fr 18fr 1fr;
      }
      
      .homepost > * {
        grid-column: 2 / -2;
        text-align: left;
      }
      
      .homepost p {
        font-weight: bold;
        font-size: 20px;
      }
      
      `}</style>
    </div>
  );
}

export default HomePage;
