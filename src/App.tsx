import React from 'react';
import logo from './logo.svg';
import css from './App.module.scss';

function App() {

  console.log('css', css);
  return (
    <div className={css.root}>
      <header className={css.header}>
        <img src={logo} className={css.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={css.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
