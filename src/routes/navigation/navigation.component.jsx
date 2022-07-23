import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = ({ setOpen }) => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-top">
          <Link className="nav-sing" to="/login" onClick={() => setOpen(false)}>
            LOGIN
          </Link>
          <span>|</span>
          <Link
            className="nav-sing"
            to="/signup"
            onClick={() => setOpen(false)}
          >
            SING UP
          </Link>
          <div className="close-btn" onClick={() => setOpen(false)}>
            Close
          </div>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/hats">
            HATS
          </Link>
          <Link className="nav-link" to="/jackets">
            JACKETS
          </Link>
          <Link className="nav-link" to="/sneakers">
            SNEAKERS
          </Link>
          <Link className="nav-link" to="/womens">
            WOMENS
          </Link>
          <Link className="nav-link" to="/mens">
            MENS
          </Link>
        </div>
        <div className="nav-footer">
          <div className="nav-footer-logo" />
          <p>
            ALL WORK AND
            <br />
            NO PLAY <br />
            MAKES YOU MAD
          </p>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
