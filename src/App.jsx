import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuspenseLayout from "./layout/SuspenseLayout"; // Adjust the path as needed
import NotFound from './pages/NotFound';
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader"
import "./index.css";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const HowToSupport = lazy(() => import("./pages/HowToSupport"));
const OurImpact = lazy(() => import("./pages/OurImpact"));
const RegisterSupport = lazy(() => import("./pages/RegisterSupport"));
const GiveSupport = lazy(() => import("./pages/GiveSupport"));
const ReferMinister = lazy(() => import("./pages/ReferMinister"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuspenseLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader/>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Loader/>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="how-to-support"
            element={
              <Suspense fallback={<Loader/>}>
                <HowToSupport />
              </Suspense>
            }
          />
          <Route
            path="impact"
            element={
              <Suspense fallback={<Loader/>}>
                <OurImpact />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Loader/>}>
                <RegisterSupport />
              </Suspense>
            }
          />
          <Route
            path="give-support"
            element={
              <Suspense fallback={<Loader/>}>
                <GiveSupport />
              </Suspense>
            }
          />
          <Route
            path="refer-minister"
            element={
              <Suspense fallback={<Loader/>}>
                <ReferMinister />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Loader/>}>
                <ContactUs />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader/>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
