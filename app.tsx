import * as React from 'react'
import ReactDOM from 'react-dom'

function sayEmoji() {
    alert('🙊🙉🙈')
}
    
function App() {
    return <button onClick={sayEmoji}>😃</button>
}

ReactDOM.render(<App />, document.querySelector('#root'))
