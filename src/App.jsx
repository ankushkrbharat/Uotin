
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Create from './pages/Create'


function App() {
 

  return (
    <Routes>
      <Route path={'/'} element={<Homepage/>} />
      <Route path={'/create'} element={<Create/>} />
    </Routes>
  )
}

export default App
