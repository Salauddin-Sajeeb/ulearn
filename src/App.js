
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Lession1 from './Components/Lesson1/Lession1';
import Page1 from './Components/Lesson1/Page1';
import Page2 from './Components/Lesson1/Page2';
import Page3 from './Components/Lesson1/Exercise1/Page3';
import Page4 from './Components/Lesson1/Exercise1/Page4';
import Page5 from './Components/Lesson1/Exercise1/Page5';
import Page6 from './Components/Lesson1/Exercise1/Page6';
import Exercise2 from './Components/Lesson1/exercise2/Exercise2';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson1" element={<Lession1 />} />
          <Route path="/e1p1" element={<Page1 />} />
          <Route path="/e1p2" element={<Page2 />} />
          <Route path="/e1p3" element={<Page3 />} />
          <Route path="/e1p4" element={<Page4 />} />
          <Route path="/e1p5" element={<Page5 />} />
          <Route path="/e1p6" element={<Page6 />} />
          <Route path="/e2p1" element={<Exercise2 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
