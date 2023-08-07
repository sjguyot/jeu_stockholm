import * as React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function MonBoutton() {
    const [compteur, setCompteur] = useState(0);
    function handleClick() {
        setCompteur(compteur +1);
    }
    return(
        <>
        Val = {compteur}
                <button onClick={handleClick}>+1</button>
        </>
    )
}
    
function App() {
    return <MonBoutton />
}

ReactDOM.render(<App />, document.querySelector('#root'))
