import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Filters from './pages/filters.jsx'
import ModalWindowFilters from './components/modalWindowFilters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ModalWindowFilters />
    <Filters />
  </React.StrictMode>,
)
