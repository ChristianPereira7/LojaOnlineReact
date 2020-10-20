import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';

const Header = () => {

        return(
            <HeaderArea>
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <span className="logo-1">C</span>
                            <span className="logo-2">H</span>
                            <span className="logo-3">P</span>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="">Login</Link>
                            </li>
                            <li>
                                <Link to="">Cadastrar</Link>
                            </li>

                            <li>
                                <Link to="" className="button">Poste um anúncio</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </HeaderArea>
        );

}

export default Header;