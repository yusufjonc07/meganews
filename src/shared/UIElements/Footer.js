import React from "react";

const Footer = () => {
  return (
    <footer class="container-fluid pt-5">
      <div class="container">
        <h2 class="logo text-center">Shahala</h2>
        <nav class="nav nav-fill mx-auto mt-5">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://facebook.com/fh5co"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://facebook.com/fh5co"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              <i class="fas fa-rss"></i>
            </a>
          </li>
        </nav>
      </div>
      <div class="copyright mt-4">
        <p class="text-center">
          © 2019{" "}
          <a href="#" class="text-white">
            Shahala
          </a>
          . All Rights Reserved. Design by{" "}
          <a
            href="https://freehtml5.co/shahala"
            target="_blank"
            class="text-white"
          >
            FreeHTML5.co
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
