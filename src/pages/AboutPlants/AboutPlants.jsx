import flowerCareList from '../../components/flowerCareList.json';
import { useState } from "react";
import css from './AboutPlants.module.css';
import img from '../../assets/img/fon.jpg';

export default function AboutPlants() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <ul className={css.ul}>
      {flowerCareList.map((el) => (
        <li key={el.id} className={css.li}>
          <h3 className={css.h3} onClick={() => handleClick(el.id)}>{el.title}</h3>
          {activeId === el.id && <><p className={css.p}>{el.text}</p>
          <img src={img} width={150} /></>
          }
          
        </li>
      ))}
    </ul>
  );
}