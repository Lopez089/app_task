import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
