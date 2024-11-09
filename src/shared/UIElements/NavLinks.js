import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { label: "NEWS", to: "/" },
  { label: "HISTORY", to: "/" },
  { label: "CULTURE", to: "/" },
  { label: "TECH", to: "/" },
  { label: "LIFE", to: "/" },
  { label: "OPINION", to: "/" },
];

const NavLinks = () => {
  return (
    <React.Fragment>
      <input
        type="text"
        id="nav-search"
        className="nav-search mx-auto form-control"
      />
      <div className="ml-0 mr-0 pb-1">
        <nav className="navbar navbar-expand-md">
          <button
            className="navbar-toggler ml-auto"
            data-target="#my-nav"
            data-toggle="collapse"
            aria-controls="my-nav"
            aria-expanded="false"
            // onClick={myFunction(this)}
            aria-label="Toggle navigation"
          >
            <span className="bar1"></span> <span className="bar2"></span>{" "}
            <span className="bar3"></span>
          </button>
          <div id="my-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              {LINKS.map((link) => (
                <li className="nav-item">
                  <Link className="nav-link" to={link.to}>{link.label}</Link>
                </li>
              ))}
              <li className="nav-item">
                <form action="" method="POST">
                  <div
                    className="input-group mt-0 mx-auto"
                    style={{ width: "16px" }}
                  >
                    <div className="pt-2">
                      <i className="fa fa-search text-white"></i>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavLinks;
