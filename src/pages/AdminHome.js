import React from 'react';
import { useUser } from '../UserContext';

const AdminHome = () => {
  const { user } = useUser();

  return (
    <div>
      <h2>Bem-vindo, {user.email} (Administrador)!</h2>
      <p>Esta é a página de administração.</p>
    </div>
  );
};

export default AdminHome;