
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Lession1 from './Components/Lesson1/Lession1';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson1" element={<Lession1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
