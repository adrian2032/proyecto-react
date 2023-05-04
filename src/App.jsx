import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import MyButton from "./assets/components/Button";
import Item from './assets/components/Item';
import ViewCount from './assets/components/ViewCount/ViewCount';
import MyNavbar from "./assets/components/Navbar";

function handleClick(){
  alert("dirigiendo a sitio web")

}

function App() {

  const userName = "cecilia";
  const [count, setCount] = useState(0)


  return (
    <>

      <div>
        <div className="header">
          <MyNavbar color= "orange"></MyNavbar>
          <ViewCount initialValue= {0}></ViewCount>
        </div>

        <h1>SONIC COMPUTACION</h1>

        <div>
            <MyButton color="red" label="Computadoras" onclick={handleClick} > Computadoras </MyButton>
            <MyButton color="yellow" label="Notebooks"  onclick={handleClick} > Notebooks </MyButton>
            <MyButton color="green" label="Componentes"  onclick={handleClick} > Componentes de PC </MyButton>
            <MyButton color="red" label="otros"  onclick={handleClick} > Otros Productos </MyButton>
            


          </div>


        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
       {/*
        <div >
          <h1>Hola {userName}</h1>
          <ViewCount/>
          <div>
            <MyButton color="red" label="clickeame por favor" onClick={handleNoClick} > clickeame por favor</MyButton>
          </div>
        </div>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
            <div>
        <MyButton/>
      </div>
      <div>
        <Item></Item>
      </div>

  */}</div>

      <h1>Vite + React</h1>
      
      
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  

 
      
    </>
  )
}

export default App
