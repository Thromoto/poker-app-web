import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

import './Sair.css';

const Sair = () => {
  const { logoutUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Chama a função logoutUser para limpar as informações do usuário
    logoutUser();

    // Navega de volta para a página de login (ou qualquer outra página desejada)
    navigate('/login');
  };

  function handleClick() {
    navigate('/home');
  }

  return (
    <div className='body-sair'>
      <div className='container-sair'>
        <h2>Tem certeza que deseja sair?</h2>
        <button onClick={handleClick}>Voltar</button>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
};

export default Sair;