import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './style.css'

const root = createRoot(document.querySelector('#root'))
const toto = true;

root.render(
    <div className='main-title'>
        { /* This is a comment */ }
        <App clickersCount={ 4 }>
            <h1>My First React App</h1>
            <p>It's so cool!</p>
        </App>
        {/* <h1 style={ { color: 'coral', backgroundColor: 'floralWhite' } }>Hello React { toto ? 'toto' : 'no toto' }</h1>
        <p className='cute-paragraph'>Lorem <strong>ipsum</strong><br/>dolor sit</p>
        <input type="checkbox" id='check'/>
        <label htmlFor="check">That checkbox</label> */}
    </div>
)