import { Outlet, Link } from "react-router-dom";

import "./index.less";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-header">
        <div className="layout-header__banner">Header</div>
        <div className="layout-header__btns">
          <Link to="/login">login</Link>
        </div>
      </div>

      <div className="layout-content">
        <div className="layout-content__menu">
          <p>
            <Link to="/home">Home</Link>
          </p>
          <p>
            <Link to="/test-1">Test-1</Link>
          </p>
          <p>
            <Link to="/test-2">Test-2</Link>
          </p>
        </div>
        <div className="layout-content__container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
