import React from 'react';
import logo from './logo.svg';
import './App.scss';
// import './component/Counter';
import Counter from './components/Counter';

const App: React.VFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Counter />
    </div>
  );
};

export default App;
