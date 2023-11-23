import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('player'); // Padrão para jogador

  const { loginUser } = useUser();
  const navigate = useNavigate();

  function handleClick() {
    // Lógica de autenticação aqui...
    // Após autenticar com sucesso, chame loginUser com email e papel.
    loginUser({ email, role });

    // Navegar para a página Home ou AdminHome com base no papel
    navigate(role === 'admin' ? '/admin-home' : '/home');
  }

  return (
    <div className="login-body">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label className="label-login">
            <input
              type="text"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label-login">
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="role-selector">
            Escolha o papel:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="player">Player</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
          <button type="button" onClick={handleClick}>
            Entrar
          </button>
        </form>
        <p>
          Não tem uma conta? <Link to="/">Registrar</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;