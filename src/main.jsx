import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const DATA = [

];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
)
