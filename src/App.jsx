import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

const AppLayout = () => {
  const [sectionRefs, setSectionRefs] = useState({});
  const pendingSection = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const registerSections = useCallback((refs) => {
    setSectionRefs(refs);
  }, []);

  const attemptScroll = useCallback(
    (sectionKey) => {
      const ref = sectionRefs[sectionKey];
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      return false;
    },
    [sectionRefs]
  );

  useEffect(() => {
    if (pendingSection.current && attemptScroll(pendingSection.current)) {
      pendingSection.current = null;
    }
  }, [sectionRefs, attemptScroll]);

  useEffect(() => {
    if (location.pathname === '/' && pendingSection.current) {
      attemptScroll(pendingSection.current);
    }
  }, [location.pathname, attemptScroll]);

  const handleSectionRequest = (sectionKey) => {
    if (!sectionKey) return;
    if (location.pathname !== '/') {
      pendingSection.current = sectionKey;
      navigate('/', { state: { target: sectionKey } });
      return;
    }

    if (!attemptScroll(sectionKey)) {
      pendingSection.current = sectionKey;
    }
  };

  return (
    <div className="app-shell">
      <Navbar onNavClick={handleSectionRequest} />
      <main className="main-shell container-xl px-0">
        <Routes>
          <Route
            path="/"
            element={<Home onRegisterSections={registerSections} onScrollToSection={handleSectionRequest} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer onNavClick={handleSectionRequest} />
    </div>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
