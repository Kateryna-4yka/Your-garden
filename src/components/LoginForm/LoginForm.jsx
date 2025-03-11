import { useId } from "react";
import css from './LoginForm.module.css';


export default function LoginForm ({ onLogin }) { 
    const id = useId();
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.dir(evt.target.elements);
        
       // Викликаємо пропс onLogin
        onLogin({
          login: evt.target.elements.login.value,
          password: evt.target.elements.password.value,
        });
    
        evt.target.reset();
      };
    
      return (
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor={`${id}-login`}>Login</label>
          <input className={css.input} type="text" name="login" id={`${id}-login`} />

          <label className={css.label} htmlFor={`${id}-password`}>Password</label>
          <input className={css.input} type="password" name="password" id={`${id}-password`} />

          <button className={css.button} type="submit">Login</button>
    </form>
      );
    };