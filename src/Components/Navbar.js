import { NavLink } from 'react-router-dom';
import "../Components/Navbar.css"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.navmode} bg-${props.navmode} `}>
      <div className="container-fluid">
        <img className="navbar-brand" src="/img/logo_removeBg.png" style={{ height: '12vh' }} alt="Logo" />

        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.navmode === '#FAE7A5' ? 'black' : 'white' }}>
            <b>Enable Dark Mode</b>
          </label>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${props.navmode === '#FAE7A5' ? (isActive ? 'text-danger' : 'text-black') : (isActive ? 'text-danger' : 'text-white')}`}
                to="/"
                style={{ fontSize: "large" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${props.navmode === '#FAE7A5' ? (isActive ? 'text-danger' : 'text-black') : (isActive ? 'text-danger' : 'text-white')}`}
                to="/about"
                style={{ fontSize: "large" }}
              >
                About me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${props.navmode === '#FAE7A5' ? (isActive ? 'text-danger' : 'text-black') : (isActive ? 'text-danger' : 'text-white')}`}

                to="/Explore"
                style={{ fontSize: "large" }}
              >
                PortFolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${props.navmode === '#FAE7A5' ? (isActive ? 'text-danger' : 'text-black') : (isActive ? 'text-danger' : 'text-white')}`}

                to="/Contact"
                style={{ fontSize: "large" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
