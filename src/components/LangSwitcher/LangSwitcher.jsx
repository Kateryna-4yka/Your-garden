import {useId, use} from 'react';
import {LengContext} from '../../context';


export default function LangSwitcher () {

// const lengConst = use(LengContext); 
// console.log(lengConst);
// const changeLang =(event) => {
//   lengConst.handelChangeLang(event.target.value)
// }

//     const lengId = useId();

    return (
      <div>
        {/* <select id={lengId} value={lengConst.leng} onChange={changeLang}>
          <option value="uk">Ukrainian</option>
          <option value="en">English</option>
        </select> */}
      </div>
    );
  };
  
  