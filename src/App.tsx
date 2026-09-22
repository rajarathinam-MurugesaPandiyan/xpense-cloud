import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Footer, FloatingThemeWidget, DemoModal } from "./components";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage, PrivacyPolicyPage, TermsPage, NotFoundPage } from "./pages";
import { ROUTES } from "./routes";
import styles from "./App.module.scss";

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isStandaloneLegal =
    location.pathname === ROUTES.PRIVACY_POLICY ||
    location.pathname === ROUTES.TERMS;

  const scrollToDownload = () => {
    if (location.pathname !== ROUTES.HOME) {
      navigate(ROUTES.HOME);
      setTimeout(() => {
        const el = document.getElementById("download");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const el = document.getElementById("download");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className={styles.appWrapper}>
      {/* Automatically scrolls to top on route change */}
      <ScrollToTop />

      {/* Main landing Navbar (only displayed on non-legal pages) */}
      {!isStandaloneLegal && (
        <Navbar onOpenDownload={scrollToDownload} onOpenDemo={handleOpenDemo} />
      )}

      {/* React Router Routes */}
      <main className={styles.mainContent}>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <HomePage
                onOpenDownload={scrollToDownload}
                onOpenDemo={handleOpenDemo}
              />
            }
          />
          <Route
            path={ROUTES.PRIVACY_POLICY}
            element={<PrivacyPolicyPage onOpenDemo={handleOpenDemo} />}
          />
          <Route
            path={ROUTES.TERMS}
            element={<TermsPage onOpenDemo={handleOpenDemo} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer onOpenDownload={scrollToDownload} onOpenDemo={handleOpenDemo} />

      {/* Floating Theme Switcher Dock */}
      <FloatingThemeWidget />

      {/* Secured Demo Request Dialog */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
};

export default App;
