
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Create from './pages/Create'
import LChart from './pages/LChart'
import Barchart from './pages/Barchart'
import Areachart from './pages/Areachart'
import Scatterchart from './pages/Scatter'
import Piechart from './pages/Piechart'

function App() {
 

  return (
    <Routes>
      <Route path={'/'} element={<Homepage/>} />
      <Route path={'/create'} element={<Create/>} />
      <Route path={'/linechart'} element={<LChart/>} />
      <Route path={'/barchart'} element={<Barchart/>} />
      <Route path={'/areachart'} element={<Areachart/>} />
      <Route path={'/scatterchart'} element={<Scatterchart/>} />
      <Route path={'/piechart'} element={<Piechart/>} />
    </Routes>
  )
}

export default App
