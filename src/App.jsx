import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Characters from './views/Characters'
import Details from './views/Details'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />}/> 
            <Route path="/details/:id" element={<Details />}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
