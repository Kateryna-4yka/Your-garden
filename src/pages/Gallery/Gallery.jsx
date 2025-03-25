import {useEffect, useState} from 'react';
import response from '../../articles-api';
import SearchImg from '../../components/SearchImg/SearchImg';
import Img from '../../components/Img/Img';
import css from './Gallery.module.css';

export default function Gallery () {
// ===================індикатор завантаження
const [loading, setLoading] = useState (false); 
// ============================помилка
const [error, setError] = useState (false);
// ============================слово з форми
const [word, nowWord] = useState ('')
const handelNowWord =(wordInput)=> {
  nowWord(wordInput);
  setPage(1);
  setArticles([]);
  console.log(word);}
// ==========================сторінка 
const [page, setPage] = useState(1);
const handelPage =() =>{
  setPage (page +1);}
// ==========================запит

const [articles, setArticles] = useState([]);
useEffect (()=>{
  // if (word.length === 0) {return}

  async function handelSearchForm () {
    try {
      setLoading(true);
      setError(false);
      const responseFetch = await  response (word, page); 
      setArticles((prev)=>{ return [...prev, ...responseFetch]});} 
    catch (error) {setError(true);}
    finally {setLoading(false);}
  }
  handelSearchForm ();
}, [word, page])


return (<div className={css.div}>
  <SearchImg handelNowWord ={handelNowWord}/>
  {error && (<p>Please try reloading this page!</p>)}
  {loading && <p>loading</p> }
    {articles.length > 0 &&  <Img value={articles} />}
  {articles.length > 0 && !loading && <button onClick={handelPage}>load more</button>}
      </div>
    );
  }