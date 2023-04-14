import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))
const toto = true;

root.render(
    <div className='main-title'>
        { /* This is a comment */ }
        <h1>Hello React { toto ? 'toto' : 'no toto' }</h1>
        <p>Lorem <strong>ipsum</strong><br/>dolor sit</p>
        <input type="checkbox" id='check'/>
        <label htmlFor="check">That checkbox</label>
    </div>
)