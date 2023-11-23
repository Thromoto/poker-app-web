import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/controle">Controle</Link>
          </li>
          <li>
            <Link to="/reload">Reloads</Link>
          </li>
          <li>
            <Link to="/saques">Saques</Link>
          </li>
          <li>
            <Link to="/pagamento">Pagamento</Link>
          </li>
          <li>
            <Link to="/sair">Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;