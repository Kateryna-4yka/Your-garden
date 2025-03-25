import {NavLink, Outlet, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from "axios";
import {pict} from '../../articles-api';

export default function PhotoComent () {
const params = useParams();
const [user, setUser] = useState (null);
useEffect (()=>{
async function getFech () {
    try {
const data = await pict (params.photoID);
console.log(data);
setUser(data);
console.log(user);
    } catch {}
}
getFech ()
}, [params.photoID])


    return <>
    {user &&       <div>
        <img src={user.urls.regular} alt={user.alt_description} width={300}/>
        {user.user.name && <p >Author: {user.user.name}</p>}
        {user.user.portfolio_url && <a target='_blank' href={user.user.portfolio_url}>Photographer's portfolio</a>}

        {user.user.location && <p >Location: {user.user.location}</p>}
        {user.user.social.total_likes && <p >Likes: {user.user.social.total_likes}</p>}


        <NavLink to="coment">коментарі до картинки</NavLink>
        <NavLink to="help">допомога, поради та посилання на продукти для купівлі</NavLink>


<Outlet />

      </div> }
    </>
}