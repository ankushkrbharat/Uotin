
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Create from './pages/Create'
import LChart from './pages/LChart'
import Barchart from './pages/Barchart'
import Areachart from './pages/Areachart'
import Scatterchart from './pages/Scatter'
import Piechart from './pages/Piechart'
import Mapbuilder from './pages/Mapbuilder'
import Visualisemap from './pages/Visualisemap'
import R1 from './Components/R1'
import R2 from './Components/R2'


function App() {
 

  return (
    <Routes>
      <Route path={'/'} element={<Homepage/>} />
      <Route path={'/createmap'} element={<Mapbuilder/>}/>
      <Route path={'/visualisemap'} element={<Visualisemap/>}/>
      <Route path={'/canvas1'} element={<R1/>}/>
      <Route path={'/canvas2'} element={<R2/>}/>
      <Route path={'/plots'} element={<Create/>} />
      <Route path={'/linechart'} element={<LChart/>} />
      <Route path={'/barchart'} element={<Barchart/>} />
      <Route path={'/areachart'} element={<Areachart/>} />
      <Route path={'/scatterchart'} element={<Scatterchart/>} />
      <Route path={'/piechart'} element={<Piechart/>} />
    </Routes>
  )
}

export default App
