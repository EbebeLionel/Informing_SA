import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Podcast from './pages/Podcast'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App