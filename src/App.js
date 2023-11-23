import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

import Login from './pages/Login';
import Home from './pages/Home';
import Sair from './pages/Sair';
import Controle from './pages/Controle';
import Reload from './pages/Reloads';
import Pagamento from './pages/Pagamento';
import Saques from './pages/Saques';
import AdminHome from './pages/AdminHome';

const PrivateRoute = ({ element, adminOnly }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/home" />;
  }

  return <React.Fragment>{element}</React.Fragment>;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={<PrivateRoute element={<Home />} adminOnly={false} />}
      />
      <Route
        path="/admin-home"
        element={<PrivateRoute element={<AdminHome />} adminOnly={true} />}
      />
      <Route
        path="/sair"
        element={<PrivateRoute element={<Sair />} adminOnly={false} />}
      />
      <Route
        path="/controle"
        element={<PrivateRoute element={<Controle />} adminOnly={false} />}
      />
      <Route
        path="/reload"
        element={<PrivateRoute element={<Reload />} adminOnly={false} />}
      />
      <Route
        path="/pagamento"
        element={<PrivateRoute element={<Pagamento />} adminOnly={false} />}
      />
      <Route
        path="/saques"
        element={<PrivateRoute element={<Saques />} adminOnly={false} />}
      />
    </Routes>
  );
}

export default App;
