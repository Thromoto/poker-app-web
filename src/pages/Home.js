import React from 'react';
import { useUser } from '../UserContext';
import Header from '../components/Header';

import './Home.css';

const Home = () => {
  const { user } = useUser();

  return (
    <div className='body-home'>
      <Header />
      {user && user.email ? (
        <h2>{`Olá, ${user.email}`}</h2>
      ) : (
        <h2>Bem-vindo à Home</h2>
      )}
    </div>
  );
};

export default Home;