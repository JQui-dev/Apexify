// MODULES
import { BrowserRouter, Routes, Route } from "react-router-dom"

// PAGES
import Land from "./pages/Land"
import Error from "./pages/Error"
  import Next from "./pages/Next"
  import Last from "./pages/Last"
  import Stand from "./pages/Stand"
  import Watch from "./pages/Watch"
  import Profile from "./pages/Profile"
  import Login from "./pages/Login"

// COMPONENTS
import NavBar from "./components/NavBar"

// STYLE
import './style/App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Land/>}></Route>
          <Route path="*" element={<Error/>}></Route>

          <Route path="/next" element={<Next/>}></Route>
          <Route path="/last" element={<Last/>}></Route>
          <Route path="/stand" element={<Stand/>}></Route>
          <Route path="/watch" element={<Watch/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
