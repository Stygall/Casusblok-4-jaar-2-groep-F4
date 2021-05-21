import React from 'react'
import {useMoralis} from 'react-moralis';

import './App.css';
import Header from './components/header/header'
import Product from './components/product/product';

function App() {
  return(
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      <div >
        <Product/>
      </div>
    </div>
  )
}

export default App;
