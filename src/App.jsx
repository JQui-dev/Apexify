// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Land from './pages/Land'
import Error from './pages/Error'
import Next from './pages/Next'
import Last from './pages/Last'
import Stand from './pages/Stand'
import Profile from './pages/Profile'

// COMPONENTS
import NavBar from './components/NavBar'

// STYLE
import './style/App.scss'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Land />} />
          <Route path='*' element={<Error />} />

          <Route path='/next' element={<Next />} />
          <Route path='/last' element={<Last />} />
          <Route path='/stand' element={<Stand />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
