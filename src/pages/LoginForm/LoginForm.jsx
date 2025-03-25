import { useId, useState } from "react";
import css from './LoginForm.module.css';


export default function LoginForm () { 
const id = useId();

const [informFromForma, setInformFromForma] = useState({
  login: '',
  password: '',
})

const handelChange =(event)=>{
  setInformFromForma({
...informFromForma, [event.target.name]: event.target.value
  })
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.elements.login.value);
  console.log(event.target.elements.password.value);
const login = event.target.elements.login.value;
const password = event.target.elements.password.value;


  event.target.reset();
  }

const [checked, setChecked] = useState(false);
const handelChecked =(event)=> {
  setChecked(event.target.checked);
  console.log(event.target.checked);
}
  
      return (<>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor={`${id}-login`}>Login</label>
          <input className={css.input} type="text" name="login" id={`${id}-login`} onChange={handelChange} value={informFromForma.login} />

          <label className={css.label} htmlFor={`${id}-password`}>Password</label>
          <input className={css.input} type="password" name="password" id={`${id}-password`} />

          <button className={css.button} type="submit">Login</button>
    </form>

<label>
        <input type="checkbox" name="terms" checked={checked} onChange={handelChecked}/> 
				I accept terms and conditions
      </label>
      <button type="button" disabled={!checked}>Proceed</button>
      </>);
    };