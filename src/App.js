import Header from './Header' 
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
