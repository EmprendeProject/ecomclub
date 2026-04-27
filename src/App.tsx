import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing1 from './pages/Landing1'
import Landing2 from './pages/Landing2'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing1 />} />
        <Route path="/landing2" element={<Landing2 />} />
      </Routes>
    </Router>
  )
}

export default App
