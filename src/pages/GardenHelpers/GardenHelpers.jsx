import {useState, useId} from 'react';
import css from './GardenHelpers.module.css';


export default function GardenHelpers () {
    const product = useId();
    const numbOfFlow = useId();
    const forWhat = useId();

    const [valueInInput, getvalueInInput] = useState('');
    const handlevalueInInput = (evt) => {
        getvalueInInput (evt.target.value)}

    const [numb, setNumb] = useState(0);
    const handelNumb = (event) => {
        console.log(event.target.value);
        setNumb(event.target.value)}

    const [forWhats, setforWhats] = useState("home");
    const handelforWhats = (event) => {
        console.log(event.target.value);
        setforWhats(event.target.value)}

    return <>
    <label htmlFor={product}>{valueInInput !== ''? `You are trying to find  ${valueInInput}` : 'Product name'}</label>
    <input id={product} name="product" placeholder='product name' value={valueInInput} onChange={handlevalueInInput}/>

    <label htmlFor={numbOfFlow}>{numb !== 0 ? `You need to light for ${numb} flowers` : 'Choose how many flowers need light'}</label>
    <select id={numbOfFlow} name="numb" onChange={handelNumb} value={numb}>
        <option>1-3</option>
        <option>4-6</option>
        <option>7-10</option>
        <option>more than 10</option>
    </select>

            <label htmlFor={forWhat}>for home</label>
            <input id={forWhat} type="radio" name="forWhat" value='home' checked={forWhats === "home"} onChange={handelforWhats}/>
            <label htmlFor={forWhat}>for greenhouse </label>
            <input id={forWhat} type="radio" name="forWhat" value='greenhouse' checked={forWhats === "greenhouse"} onChange={handelforWhats} />
            <label htmlFor={forWhat}>for office</label>
            <input id={forWhat} type="radio" name="forWhat" value='office' checked={forWhats === "office"} onChange={handelforWhats} />



    
    </>
}