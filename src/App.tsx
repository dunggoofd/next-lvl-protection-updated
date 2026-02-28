import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

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
const PPFNewCarPage              = lazy(() => import('./pages/PPFNewCarPage'));
const PPFDarkPaintPage           = lazy(() => import('./pages/PPFDarkPaintPage'));
const PPFStoneChipPage           = lazy(() => import('./pages/PPFStoneChipPage'));
const PPFResalePage              = lazy(() => import('./pages/PPFResalePage'));
const SunTekPPFPage              = lazy(() => import('./pages/SunTekPPFPage'));
const PPFCostPage                = lazy(() => import('./pages/PPFCostPage'));
const PPFWarrantyPage            = lazy(() => import('./pages/PPFWarrantyPage'));
const PPFPartialPage             = lazy(() => import('./pages/PPFPartialPage'));
const PPFSelfHealingPage         = lazy(() => import('./pages/PPFSelfHealingPage'));
const PPFGlossMattePage          = lazy(() => import('./pages/PPFGlossMattePage'));
const PPFNearMePage              = lazy(() => import('./pages/PPFNearMePage'));
const CeramicNewCarPage          = lazy(() => import('./pages/CeramicNewCarPage'));
const CeramicCostPage            = lazy(() => import('./pages/CeramicCostPage'));
const CeramicBrisbanePage        = lazy(() => import('./pages/CeramicBrisbanePage'));
const CeramicCorrectionPage      = lazy(() => import('./pages/CeramicCorrectionPage'));
const CeramicGlassPage           = lazy(() => import('./pages/CeramicGlassPage'));
const CeramicWheelsPage          = lazy(() => import('./pages/CeramicWheelsPage'));
const CeramicPPFComboPage        = lazy(() => import('./pages/CeramicPPFComboPage'));
const CeramicLongevityPage       = lazy(() => import('./pages/CeramicLongevityPage'));
const CeramicVsDealerPage        = lazy(() => import('./pages/CeramicVsDealerPage'));
const CeramicMattePage           = lazy(() => import('./pages/CeramicMattePage'));
const CeramicMaintenancePage     = lazy(() => import('./pages/CeramicMaintenancePage'));
const CeramicResalePage          = lazy(() => import('./pages/CeramicResalePage'));
const CeramicNearMePage          = lazy(() => import('./pages/CeramicNearMePage'));
const SitemapPage                = lazy(() => import('./pages/SitemapPage'));
const NotFoundPage               = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPolicyPage          = lazy(() => import('./pages/PrivacyPolicyPage'));

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
            <Route path="/ppf-new-car-brisbane" element={<PPFNewCarPage />} />
            <Route path="/ppf-dark-paint-brisbane" element={<PPFDarkPaintPage />} />
            <Route path="/ppf-stone-chip-protection-brisbane" element={<PPFStoneChipPage />} />
            <Route path="/ppf-resale-value-brisbane" element={<PPFResalePage />} />
            <Route path="/suntek-ppf-brisbane" element={<SunTekPPFPage />} />
            <Route path="/ppf-cost-brisbane" element={<PPFCostPage />} />
            <Route path="/ppf-warranty-brisbane" element={<PPFWarrantyPage />} />
            <Route path="/partial-ppf-brisbane" element={<PPFPartialPage />} />
            <Route path="/ppf-self-healing-brisbane" element={<PPFSelfHealingPage />} />
            <Route path="/gloss-vs-matte-ppf-brisbane" element={<PPFGlossMattePage />} />
            <Route path="/ppf-near-me-brisbane" element={<PPFNearMePage />} />
            <Route path="/ceramic-coating-new-car-brisbane" element={<CeramicNewCarPage />} />
            <Route path="/ceramic-coating-cost-brisbane" element={<CeramicCostPage />} />
            <Route path="/ceramic-coating-uv-brisbane" element={<CeramicBrisbanePage />} />
            <Route path="/ceramic-coating-paint-correction-brisbane" element={<CeramicCorrectionPage />} />
            <Route path="/ceramic-glass-coating-brisbane" element={<CeramicGlassPage />} />
            <Route path="/ceramic-coating-wheels-brisbane" element={<CeramicWheelsPage />} />
            <Route path="/ceramic-ppf-brisbane" element={<CeramicPPFComboPage />} />
            <Route path="/ceramic-coating-longevity-brisbane" element={<CeramicLongevityPage />} />
            <Route path="/ceramic-vs-dealer-paint-protection-brisbane" element={<CeramicVsDealerPage />} />
            <Route path="/ceramic-coating-matte-paint-brisbane" element={<CeramicMattePage />} />
            <Route path="/ceramic-coating-maintenance-brisbane" element={<CeramicMaintenancePage />} />
            <Route path="/ceramic-coating-resale-brisbane" element={<CeramicResalePage />} />
            <Route path="/ceramic-coating-near-me-brisbane" element={<CeramicNearMePage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
