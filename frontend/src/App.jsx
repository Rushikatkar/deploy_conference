import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Login from "./components/login/Login"
import Upload from "./pages/Uploadfile/Upload"
import ViewPapers from "./pages/ViewPapers/ViewPapers"
import Home from './pages/Home';
import About from './pages/About';
import Contact1 from './pages/Contact1';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/viewpapers' element={<ViewPapers />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact1 />} />
          <Route path='/uploadfile' element={<Upload />} />




        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
