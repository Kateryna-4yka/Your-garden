import {useState, useEffect, use} from 'react';
import clsx from 'clsx';
import { Routes, Route, NavLink } from "react-router-dom";

import css from "./App.module.css";
// -----------------------------------------компоненти-----------------------------

import Home from '../../pages/Home/Home';
import AboutPlants from '../../pages/AboutPlants/AboutPlants';
import GardenHelpers from '../../pages/GardenHelpers/GardenHelpers';
import LoginForm from '../../pages/LoginForm/LoginForm';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import Gallery from '../../pages/Gallery/Gallery';
import PhotoComent from '../PhotoComent/PhotoComent';

import Plants from '../../pages/Plants/Plants';

import Coment from '../Coment/Coment';
import Help from '../Help/Help';

// -------------------------------------------іконки-----------------------------



import { GrLanguage } from "react-icons/gr";
import { GiStripedSun } from "react-icons/gi";
// ------------------------------------------компоненти-----------------------------

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};


export default function App() {

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





return <div className={css.div}>
  <nav  className={css.nav}>

    <NavLink to="/" className={buildLinkClass}>
      Home
    </NavLink>

    <NavLink to="/about_plants" className={buildLinkClass}>
      About Plants
    </NavLink>

    <NavLink to="/plants" className={buildLinkClass}>
      Plants
    </NavLink>
        
    <NavLink to="/garden_helpers" className={buildLinkClass}>
      Garden helpers
    </NavLink>

    <NavLink to="/plant_gallery" className={buildLinkClass}>
      Plant gallery
    </NavLink>

    <NavLink to="/log_in" className={buildLinkClass}>
      LogIn
    </NavLink>
          
    <div className={css.iconsDiv}>
      <LangSwitcher />
      <GrLanguage className={css.icon} />
      <GiStripedSun className={tem === "dark" ? css.icon : css.iconL} onClick={handelTem} />
    </div>

  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about_plants" element={<AboutPlants />} />
    <Route path="/plants" element={<Plants />} />
    <Route path="/garden_helpers" element={<GardenHelpers />} />
    <Route path="/plant_gallery" element={<Gallery />} />
    <Route path="/log_in" element={<LoginForm />} />
    <Route path="/plant_gallery/:photoID" element={<PhotoComent />} >
    <Route path="coment" element={<Coment />} />
      <Route path="help" element={<Help />} />
    </Route>
    <Route path="*" element={<Home />} />
  </Routes>

</div>}