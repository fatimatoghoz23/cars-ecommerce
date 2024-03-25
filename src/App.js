import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter as Router,Routes ,Route, BrowserRouter} from 'react-router-dom'
import Cart from './Pages/Cart/Cart';
import Main from './Pages/main/Main';
import Product from './Pages/Product/Product';
function App() {
  
  return(
    <>
     <Header/>
  
      <Routes>
      <Route exact Component={Main} path='/' />
      <Route exact Component={Cart} path='/Cart' />
      <Route exact Component={Product} path=':productId' />
      </Routes>
    
    </>
    
   )
  };
export default App;
