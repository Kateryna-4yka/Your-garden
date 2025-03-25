import { createContext, useState } from 'react';

// створюємо контекст мови 

export const LengContext = createContext();

// інкапсулюємо данні, щоб передавати всім компонентам стан як контекст

export default function ChangeLang ({children}) {

const [stan, setStan] = useState ('en');

function handelChangeLang (newLang) {
  setStan(newLang);
}

return <LengContext value={{leng: stan, handelChangeLang}} > {children}
</LengContext>

}

