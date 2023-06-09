import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header"
function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/movie/:id" element={<h1>About</h1>}/>
          <Route path="/movie/:type" element={<h1>Contact</h1>}/>
          <Route path="/*" element={<h1>Error</h1>} ></Route>
          </Routes>
      </Router>

    </div>
  )
}

export default App