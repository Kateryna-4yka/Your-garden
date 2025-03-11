import css from './Header.module.css'

import { GrLanguage } from "react-icons/gr";
import { GiStripedSun } from "react-icons/gi";
// -------------------------------------------іконки-----------------------------

import flowerCareList from '../flowerCareList.json';
import AboutPlants from '../AboutPlants/AboutPlants';

import LoginForm from '../LoginForm/LoginForm';

import LangSwitcher from '../LangSwitcher/LangSwitcher';



export default function Header ({cetClick, changeThem, selectedTem}) {

  return <div className={css.header}>
    <p className={css.p} onClick={() => cetClick(null)}>Mane page</p>
    <p className={css.p} onClick={() => cetClick(<AboutPlants flowerCareList={flowerCareList} />)}>AboutPlants</p>
    <p className={css.p} onClick={() => cetClick('добрива для квітів')}>Fertilizers</p>
    <p className={css.p} onClick={() => cetClick('лампи для квітів')}>Lamps for flowers</p>
    <p className={css.p} onClick={() => cetClick('картинки')}>Gallery</p>
    <p className={css.p} onClick={() => cetClick(<LoginForm />)}>LogIn</p>




  <div className={css.iconsDiv}>
    <LangSwitcher />
    <GrLanguage className={css.icon} />
    <GiStripedSun className={selectedTem === "dark" ? css.icon : css.iconL} onClick={changeThem} />
  </div>


</div>}