import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import "./style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
