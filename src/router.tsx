import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loader from './components/Loader';
import LandingPage from './pages/Landing.page';
import DownloadPage from './pages/Download.page';

function Routers() {
    return (
      <Suspense fallback={<Loader />}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/download" element={<DownloadPage />} />
            </Routes>
          </Router>
        </Suspense>
    )
}

export default Routers