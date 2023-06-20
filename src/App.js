
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import Service from './routes/Service';
import About from './routes/About';
import Contact from './routes/Contact';
import Recommendation from "./routes/Recommendation";
import BookFormPage from './routes/BookForm';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/service" element={<Service/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/recommendation" element={<Recommendation/>}/>
        <Route path="/bookform" element={<BookFormPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
