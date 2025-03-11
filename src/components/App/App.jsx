import {useState, useEffect} from 'react';
import css from "./App.module.css";

// -----------------------------------------компоненти-----------------------------
import Header from '../Header/Header';
import MenuList from '../MenuList/MenuList';
import Hero from '../Hero/Hero';


// -----------------------------------------компоненти-----------------------------


export default function App() {

  const [click, cetClick] = useState (false);
  const handelClick = ()=> {
    cetClick(!click)
  }


  // ===========================зміна теми та считування теми з LS
const [tem, setTem] =useState (()=> {
  const infoFromLS = localStorage.getItem("tem");
if (infoFromLS !== null) {
  return JSON.parse(infoFromLS)}
  return "dark"
})

const handelTem =()=>{
  setTem((prevTem) => (prevTem === "dark" ? "light" : "dark"));
}

useEffect (() => {
localStorage.setItem("tem", JSON.stringify(tem))}, [tem])

return <>
    <Header cetClick={cetClick} changeThem={handelTem} selectedTem={tem} />
    {click ? <MenuList content={click} /> : <Hero />}

</>}