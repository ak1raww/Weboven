import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Web from './pages/Web'
import Social from './pages/Social'
import Metodo from './pages/Metodo'
import Testimonianze from './pages/Testimonianze'
import './styles/global.css'
import Contatto from './pages/Contatto'

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Web />} />
          <Route path="/social" element={<Social />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/testimonianze" element={<Testimonianze />} />
          <Route path="/contatto" element={<Contatto />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}