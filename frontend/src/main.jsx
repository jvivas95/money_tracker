import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Layout from './layouts/SidebarLayout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/DashBoard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
