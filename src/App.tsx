import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Footer, FloatingThemeWidget, FeedbackModal, AppleInProgressModal } from "./components";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage, PrivacyPolicyPage, TermsPage, DeleteAccountPage, NotFoundPage } from "./pages";
import { ROUTES } from "./routes";
import styles from "./App.module.scss";

export const App: React.FC = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState<boolean>(false);
  const [isAppleInProgressModalOpen, setIsAppleInProgressModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isStandaloneLegal =
    location.pathname === ROUTES.PRIVACY_POLICY ||
    location.pathname === ROUTES.TERMS ||
    location.pathname === ROUTES.DELETE_ACCOUNT;

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

  const handleOpenFeedback = () => {
    setIsFeedbackModalOpen(true);
  };

  const handleCloseFeedback = () => {
    setIsFeedbackModalOpen(false);
  };

  const handleOpenAppleInProgress = () => {
    setIsAppleInProgressModalOpen(true);
  };

  const handleCloseAppleInProgress = () => {
    setIsAppleInProgressModalOpen(false);
  };

  return (
    <div className={styles.appWrapper}>
      {/* Automatically scrolls to top on route change */}
      <ScrollToTop />

      {/* Main landing Navbar (only displayed on non-legal pages) */}
      {!isStandaloneLegal && (
        <Navbar
          onOpenDownload={scrollToDownload}
          onOpenFeedback={handleOpenFeedback}
          onOpenDemo={handleOpenFeedback}
        />
      )}

      {/* React Router Routes */}
      <main className={styles.mainContent}>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <HomePage
                onOpenDownload={scrollToDownload}
                onOpenDemo={handleOpenFeedback}
                onOpenFeedback={handleOpenFeedback}
                onOpenAppleInProgress={handleOpenAppleInProgress}
              />
            }
          />
          <Route
            path={ROUTES.PRIVACY_POLICY}
            element={<PrivacyPolicyPage onOpenDemo={handleOpenFeedback} />}
          />
          <Route
            path={ROUTES.TERMS}
            element={<TermsPage onOpenDemo={handleOpenFeedback} />}
          />
          <Route
            path={ROUTES.DELETE_ACCOUNT}
            element={<DeleteAccountPage onOpenDemo={handleOpenFeedback} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer
        onOpenDownload={scrollToDownload}
        onOpenFeedback={handleOpenFeedback}
        onOpenDemo={handleOpenFeedback}
        onOpenAppleInProgress={handleOpenAppleInProgress}
      />

      {/* Floating Theme Switcher Dock */}
      <FloatingThemeWidget />

      {/* Feedback Dialog posting directly to dev.xpense-cloud.in/api/v1/post */}
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={handleCloseFeedback}
      />

      {/* Apple ID & iOS App Store Release In Progress Dialog */}
      <AppleInProgressModal
        isOpen={isAppleInProgressModalOpen}
        onClose={handleCloseAppleInProgress}
      />
    </div>
  );
};

export default App;
