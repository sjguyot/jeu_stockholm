import * as React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function MonBoutton() {
    const [compteur, setCompteur] = useState(0);
    function handleClick() {
        setCompteur(compteur +1);
    }
    function handleClick2(){
        setCompteur(compteur -1)
    }
    function handleClick3(){
        setCompteur(compteur = 0)
    }
    return(
        <>
        Val = {compteur}
                <button onClick={handleClick}>+1</button>
                <button onClick={handleClick2}>-1</button>
                <button onClick={handleClick3}>reset</button>
        </>
    )
}
    
function App() {
    return <MonBoutton />
}

ReactDOM.render(<App />, document.querySelector('#root'))
