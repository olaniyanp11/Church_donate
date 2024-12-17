import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./index.css";
import { Loader } from "./components/Loader/Loader";
import NotFound from './pages/NotFound';
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const HowToSupport = lazy(() => import("./pages/HowToSupport"));
const OurImpact = lazy(() => import("./pages/OurImpact"));
const RegisterSupport = lazy(() => import("./pages/RegisterSupport"));
const GiveSupport = lazy(() => import("./pages/GiveSupport"));
const ReferMinister = lazy(() => import("./pages/ReferMinister"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-support" element={<HowToSupport />} />
          <Route path="/impact" element={<OurImpact />} />
          <Route path="/register" element={<RegisterSupport />} />
          <Route path="/give-support" element={<GiveSupport />} />
          <Route path="/refer-minister" element={<ReferMinister />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
export default App