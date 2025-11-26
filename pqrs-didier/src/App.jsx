import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from '@modules/Login';
import { Request, Success } from '@modules/PQRSRequest';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/request' element={<Request />}/>
          <Route path='/request/success' element={<Success/>}/>
        </Routes>
      </BrowserRouter>
     </>
  )
}

export default App
