import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Filters from './pages/filters.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Navbar from './components/nabvar.jsx'
import RoomieCards from './components/rommieCards.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <App />
    <RoomieCards />
    <Filters />
    <Footer />
    <Login />
    <Register />
  </React.StrictMode>,
)
