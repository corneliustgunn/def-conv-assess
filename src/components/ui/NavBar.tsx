import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        <span className="navbar__icon">🏈</span>
        <span className="navbar__title">DefCov<span className="navbar__title--accent">IQ</span></span>
      </NavLink>
      <div className="navbar__links">
        <NavLink
          to="/learn"
          className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
        >
          Learn
        </NavLink>
        <NavLink
          to="/quiz"
          className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
        >
          Quiz
        </NavLink>
      </div>
    </nav>
  );
}
