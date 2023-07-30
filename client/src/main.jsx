import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Filters from './pages/filters.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import ModalWindowFilters from './components/modalWindowFilters.jsx'
import Navbar from './components/nabvar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <App />
    <ModalWindowFilters />
    <Filters />
    <Footer />
  </React.StrictMode>,
)
