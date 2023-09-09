
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Create from './pages/Create'
import LChart from './pages/LChart'


function App() {
 

  return (
    <Routes>
      <Route path={'/'} element={<Homepage/>} />
      <Route path={'/create'} element={<Create/>} />
      <Route path={'/linechart'} element={<LChart/>} />
    </Routes>
  )
}

export default App
