import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img
            className="img-fluid"
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt=""
          />
        </Link>
      </header>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Layout;
