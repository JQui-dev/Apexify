// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Main from './pages/Main'
import Error from './pages/Error'

import Calendar from './pages/Calendar'
import Race from './pages/Race'

import Standings from './pages/Standings'
import Driver from './pages/Driver'

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
            <Route path='/' element={<Main />} />
            <Route path='*' element={<Error />} />

            <Route path='/calendar' element={<Calendar />} />
            <Route path='r/:year/:round' element={<Race />} />

            <Route path='/standings/:stand' element={<Standings />} />

            <Route path='/driver/:driver' element={<Driver />} />
          </Routes>
          <div className='navMobile' />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
