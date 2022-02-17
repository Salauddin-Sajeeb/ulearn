
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
import Exercise3 from './Components/Lesson1/Exercise3/Exercise3';
import Exercise4 from './Components/Lesson1/Exercise4/Exercise4';
import Exercise5 from './Components/Lesson1/Exercise5/Exercise5';
import Exercise6 from './Components/Lesson1/Exercise6/Exercise6';
import Exercise3a from './Components/Lesson1/Exercise3/Exercise3a';
import Exercise3b from './Components/Lesson1/Exercise3/Exercise3b';
import AuthProvider from './Context/AuthProvider';
import Test from './Components/Test/Test';


function App() {

  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/e3" element={<Exercise3 />} />
            <Route path="/e3p1" element={<Exercise3a />} />
            <Route path="/e3p2" element={<Exercise3b />} />
            <Route path="/e4" element={<Exercise4 />} />
            <Route path="/e5" element={<Exercise5 />} />
            <Route path="/e6" element={<Exercise6 />} />

            <Route path='/test' element={<Test />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
