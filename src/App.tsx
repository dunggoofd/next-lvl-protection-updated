import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HomePage                   = lazy(() => import('./pages/HomePage'));
const PPFPage                    = lazy(() => import('./pages/PPFPage'));
const CeramicCoatingPage         = lazy(() => import('./pages/CeramicCoatingPage'));
const AutomotiveTintPage         = lazy(() => import('./pages/AutomotiveTintPage'));
const ResidentialTintPage        = lazy(() => import('./pages/ResidentialTintPage'));
const CommercialTintPage         = lazy(() => import('./pages/CommercialTintPage'));
const PPFQuestionsPage           = lazy(() => import('./pages/PPFQuestionsPage'));
const CeramicQuestionsPage       = lazy(() => import('./pages/CeramicQuestionsPage'));
const AutoTintQuestionsPage      = lazy(() => import('./pages/AutoTintQuestionsPage'));
const ResidentialTintQuestionsPage = lazy(() => import('./pages/ResidentialTintQuestionsPage'));
const CommercialTintQuestionsPage  = lazy(() => import('./pages/CommercialTintQuestionsPage'));
const GalleryPage                = lazy(() => import('./pages/GalleryPage'));
const AboutPage                  = lazy(() => import('./pages/AboutPage'));
const GetAQuotePage              = lazy(() => import('./pages/GetAQuotePage'));

function PageLoader() {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>
        NEXTLVL<span style={{ color: 'var(--color-accent)' }}> PROTECTION</span>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/ppf-brisbane" element={<PPFPage />} />
            <Route path="/ceramic-coating-brisbane" element={<CeramicCoatingPage />} />
            <Route path="/automotive-window-tinting-brisbane" element={<AutomotiveTintPage />} />
            <Route path="/residential-window-tinting-brisbane" element={<ResidentialTintPage />} />
            <Route path="/commercial-window-tinting-brisbane" element={<CommercialTintPage />} />
            <Route path="/ppf-questions" element={<PPFQuestionsPage />} />
            <Route path="/ceramic-coating-questions" element={<CeramicQuestionsPage />} />
            <Route path="/automotive-tinting-questions" element={<AutoTintQuestionsPage />} />
            <Route path="/residential-tinting-questions" element={<ResidentialTintQuestionsPage />} />
            <Route path="/commercial-tinting-questions" element={<CommercialTintQuestionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/get-a-quote" element={<GetAQuotePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
