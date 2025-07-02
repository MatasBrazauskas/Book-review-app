import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';

import { MainPage } from './MainPage';
import { BookPage } from './BookPage';
import { AddBookPage } from './AddBookPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="book" element={<BookPage/>}/>
        <Route path="add-book" element={<AddBookPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
