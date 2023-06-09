import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header"
import Home from "./components/Home page/Home/Home"
function App(){
  return(
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:id" element={<h1>About</h1>}/>
          <Route path="/movie/:type" element={<h1>Contact</h1>}/>
          <Route path="/*" element={<h1>Error</h1>} ></Route>
          </Routes>
      </Router>

    </div>
  )
}

export default App