import './header.css';
import { Link } from 'react-router-dom';

function Header (){
    return(
        <header>
            <Link className="logo" to="/"> Sessão de Filmes</Link>
            <Link className="favoritos" to="/favoritos">favoritos</Link>
        </header>
    )
}

export default Header;