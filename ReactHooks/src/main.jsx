import { createRoot } from 'react-dom/client'
import './App.css'
import './Hooks.css'
import './Counter.css'
import Hooks from './Hooks.jsx'
import App from './App.jsx'
import Counter from './Counter.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <Hooks />
    <Counter />
    <App />
    </>
)
