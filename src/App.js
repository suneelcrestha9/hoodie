import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Categorie from './pages/Categorie'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store'
import { Provider } from 'react-redux';


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/categorie' element={<Categorie/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
