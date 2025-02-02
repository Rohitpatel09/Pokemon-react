
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Input from './Components/Input'
import Pokemon from './Components/Pokemon'
import Home from './Components/Home'



function App() {
 const[search,setSearch]=useState("")
const[currview,setCurrview]=useState("home");

const HandleFetchBtn=(click)=>{
  setCurrview(click)
}



  const HandleSearch=(event)=>{
    console.log(event.target.value)
  setSearch(event.target.value);
  }
  
  
  return (
    <>
   {currview==="home"?(<Home HandleFetchBtn={HandleFetchBtn}></Home>):(<><Header ></Header>
   <Input HandleSearch={HandleSearch} search={search}></Input>
  <Pokemon search={search}></Pokemon> </>)}
 
    </>
  )
}

export default App
