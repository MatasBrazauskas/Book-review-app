import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';

import { MainPage } from './Pages/MainPage';
import { BookPage } from './Pages/BookPage';
import { AddBookPage } from './Pages/AddBookPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/book/:book_title" element={<BookPage/>}/>
        <Route path="add-book" element={<AddBookPage/>}/>
        <Route path="*" element={<div style={{ padding: '20px', textAlign: 'center', color: 'red' }}><h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p><Link to="/">Go to Home</Link></div>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
