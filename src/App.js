import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
