// In src/App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
          </>
        } />
        {/* Add more routes here if needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;