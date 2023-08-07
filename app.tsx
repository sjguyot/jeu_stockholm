import * as React from 'react'
import ReactDOM from 'react-dom'

function sayEmoji() {
    alert('🙊🙉🙈')
}
    
function App() {
    return <div>
        <h1>Bonjour</h1>
        <button onClick={sayEmoji}>
          😃
        </button>
    </div>
}

ReactDOM.render(<App />, document.querySelector('#root'))