import css from './App.module.css';
import React from 'react';
import Header from 'components/Header';
import Home from 'components/Home';
import Navbar from 'components/Navbar';


function App() {
  return (
    <div className={css.container}>
    <Header/>
    <main className={css.content}>
      <Home/>
    </main>
    <Navbar/>
  </div>
  );
}

export default App;
