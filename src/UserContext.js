import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recuperar informações do usuário do localStorage ao carregar a página
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loginUser = ({ email, role }) => {
    const newUser = { email, role };

    // Atualizar o estado do usuário
    setUser(newUser);

    // Armazenar informações do usuário no localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logoutUser = () => {
    // Limpar o estado do usuário
    setUser(null);

    // Limpar informações do usuário do localStorage
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};