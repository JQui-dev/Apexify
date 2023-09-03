// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Main from './pages/Main'
import Error from './pages/Error'

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
