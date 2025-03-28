import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './dashboard/Prod.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App