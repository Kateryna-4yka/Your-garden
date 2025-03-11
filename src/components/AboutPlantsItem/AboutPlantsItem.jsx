import { useState } from 'react';


export default function AboutPlantsItem ({element}) {
const [click, setClick] = useState (false) ;

const handelCkick = () => {
    setClick(prev => !prev)
}

    return <li>
    <h3 onClick={handelCkick}>{element.title}</h3>
    {click && <p>{element.text}</p>}
  </li>
}