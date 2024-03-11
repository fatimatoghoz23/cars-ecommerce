import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Cart from './component/Cart/Cart';
import Home from './Home';
import Product from './component/Product/Product';
function App() {
  
  return(
    <>
     <Header/>
    <Router>
      <Routes>
      <Route exact Component={Home} path='/' />
      <Route exact Component={Cart} path='/Cart' />
      <Route exact Component={Product} path='/Product' />
      </Routes>
    </Router>
    </>
   )
  };
export default App;
