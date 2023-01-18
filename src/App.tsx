import React from 'react';
import './styles/App.scss';
import './styles/_variables.scss'
import ProductList from "./components/product-list";

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Ты сегодня покормил кота?</h1>
      <ProductList/>
    </div>
  );
}

export default App;
