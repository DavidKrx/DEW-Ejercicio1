import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Centro">
              Centro
            </Link>
          </li>
          <li>
            <Link to="/Daw2">
              DAW 2
            </Link>
          </li>
          <li>
            <Link to="/Contenedor">Contenedor</Link>
          </li> 
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;