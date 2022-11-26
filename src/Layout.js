import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <ul className="container-fluid">
          <li className="navbar-brand">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Brijesh">Brijesh</Link>
          </li>
          <li>
            <Link to="/Sunita">Sunita</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
