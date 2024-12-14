import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import "./index.css";
import { Loader } from "./components/Loader.jsx/Loader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { About } from './pages/About';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simulating loading time
  }, []);

  return (
    <>
      {isLoading && <Loader width={16} />}  {/* Show loader until loading is done */}
      <Router>
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
