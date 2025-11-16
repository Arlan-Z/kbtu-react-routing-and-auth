import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import ItemsPage from './pages/ItemsPage'

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
      </Routes>
    </div>
  )
}

export default App