import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./index.css";
import { Loader } from "./components/Loader/Loader";
import NotFound from './pages/NotFound';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

 const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
 };
export default App