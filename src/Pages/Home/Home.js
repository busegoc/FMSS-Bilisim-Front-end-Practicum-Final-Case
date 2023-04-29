
import React from 'react';
import { Outlet } from 'react-router-dom';
import CardList from '../../components/CardList/CardList';

const Home = () => {
  return (
    <main>
        <CardList/>
        <Outlet/>
    </main>
  )
}

export default Home