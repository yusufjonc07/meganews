import React from "react";

const ProfileLinks = () => {
  return (
    <nav className="nav nav-fill mx-auto mt-3">
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://facebook.com/fh5co"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://twitter.com/fh5co"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fab fa-google-plus-g"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-rss"></i>
        </a>
      </li>
    </nav>
  );
};

export default ProfileLinks;
