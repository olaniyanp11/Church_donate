import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import "./index.css"
import { Loader } from "./components/Loader.jsx/Loader"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <>
      {isLoading && <Loader width={16} />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App