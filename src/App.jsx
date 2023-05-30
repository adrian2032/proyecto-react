import MyNavBar from "./assets/components/NavBar/Navbar";
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './assets/components/ItemDetailContainer.jsx/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Homepage from './pages/Homepage';

function handleClick(){
  alert("dirigiendo a sitio web")

}

function App() {
  return (
  <BrowserRouter>
      <MyNavBar></MyNavBar>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/product" element ={<ItemDetailContainer/>} />
        <Route path="*" element={<h4>Error 404: page not found</h4>}/>
      </Routes>
      <footer> Reclamos al 0800 o correo electronico </footer>
  </BrowserRouter>  
        
  )}

export default App
