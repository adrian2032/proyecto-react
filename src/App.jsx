import MyNavBar from "./assets/components/NavBar/Navbar";
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import { CartContextProvider } from "./assets/context/cartContext";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <MyNavBar></MyNavBar>
          <h2>Precios a dolar oficial</h2>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/product/:id" element ={<ItemDetailContainer/>} />
            <Route path="/category/:categoryid" element ={<Homepage/>} />
            <Route path="*" element={<h4>Error 404: page not found</h4>}/>
          </Routes>
          <footer> Reclamos al 0800 o correo electronico </footer>
      </BrowserRouter>
    </CartContextProvider>  
   
  )}

export default App
