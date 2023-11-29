// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Main from './pages/Main'
import Error from './pages/Error'

import Calendar from './pages/Calendar'
import Race from './pages/Race'

import Standings from './pages/Standings'
import Driver from './pages/Driver'

import Champions from './pages/Champions'

// COMPONENTS
import NavBar from './components/NavBar'

// STYLE
import './App.scss'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <section className='screen'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<Error />} />

            {/* MAIN PAGES */}
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/standings/:stand' element={<Standings />} />
            <Route path='/champions' element={<Champions />} />

            {/* SUB-PAGES */}
            <Route path='r/:year/:round' element={<Race />} />
            <Route path='/driver/:driver' element={<Driver />} />
          </Routes>
          <div className='hideNavMobile' />
        </section>
      </BrowserRouter>
    </div>
  )
}

export default App
