export default function SearchImg ({handelNowWord}) {
    
const www =(event)=> {
event.preventDefault();
let word = event.target.value; 
console.log(word);
console.log(handelNowWord (word));
handelNowWord (word);

}

    return <form onSubmit={www}>
    
    <label htmlFor="word">
<input name="word" type="text"/>

    </label>
    
    <button >word</button>
    
    </form>
}