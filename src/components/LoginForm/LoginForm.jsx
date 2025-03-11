import { useId } from "react";



export default function LoginForm ({ onLogin }) { 
    const loginId = useId();
    const passwordId = useId();
    
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
        <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
      );
    };