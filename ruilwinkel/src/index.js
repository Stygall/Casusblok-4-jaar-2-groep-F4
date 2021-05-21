import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import './index.css';
import App from './App';
import Header from './components/header/header'
import Product from './components/product/product';

const appId = "JRynKyIXRuy25qRXd7R95Mg7OIHwCCouUUJBV9Un"
const serverUrl = "https://2l8hm6ropitg.moralis.io:2053/server"

ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <Header />
    <App />
    <Product />
  </MoralisProvider>,
  document.getElementById('root')
);
