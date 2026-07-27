import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className='navbar'>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);

export default Navbar;