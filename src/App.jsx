// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Error from './pages/Error'

import Calendar from './pages/Calendar'
import Standing from './pages/Standing'
import Champions from './pages/Champions'
import About from './pages/About'

import History from './pages/History'

// COMPONENTS
import NavBar from './components/NavBar'

// STYLE
import './App.scss'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className='screen'>
          <Routes>
            <Route path='/' element={<Calendar />} />
            <Route path='*' element={<Error />} />

            <Route path='/:year/:id/standing' element={<Standing />} />
            <Route path='/champions' element={<Champions />} />
            <Route path='/about' element={<About />} />

            <Route path='/team/:id' element={<History type='team' />} />
            <Route
              path='/driver/:id'
              element={<History type='driver' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
