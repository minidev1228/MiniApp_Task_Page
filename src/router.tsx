import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loader from './components/Loader';
import LandingPage from './pages/Landing.page';

function Routers() {
    return (
      <Suspense fallback={<Loader />}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </Router>
        </Suspense>
    )
}

export default Routers