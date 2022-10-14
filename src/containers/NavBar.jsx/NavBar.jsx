import style from './NavBar.module.css'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className={style.nav}>
            <Link to='/Présent'>Présent</Link>
            <Link to='/Futur'>Futur</Link>
            <Link to='/Imparfait'>Imparfait</Link>
        </nav>
    )
};


export default NavBar