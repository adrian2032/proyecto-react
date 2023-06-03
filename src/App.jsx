import MyNavBar from "./assets/components/NavBar/Navbar";
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './assets/components/ItemDetailContainer.jsx/ItemDetailContainer';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

import Homepage from './pages/Homepage';



function App() {
  return (
  <BrowserRouter>
      <MyNavBar></MyNavBar>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/product/:id" element ={<ItemDetailContainer/>} />
        <Route path="/category/:categoryid" element ={<Homepage/>} />
        <Route path="*" element={<h4>Error 404: page not found</h4>}/>
      </Routes>
      <footer> Reclamos al 0800 o correo electronico </footer>
  </BrowserRouter>  
        
  )}

export default App
