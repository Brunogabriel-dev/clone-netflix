import React from "react";
import './Header.css';

export default () => {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/800px-Logonfx.png" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://i.pinimg.com/564x/2f/cd/d8/2fcdd8d27ad3f9cffb9ef5f5906b32a6.jpg"/>
        </a>
      </div>
    </header>

  );
}