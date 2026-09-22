import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TermsAndConditions } from '../../components';
import { ROUTES } from '../../routes';

export interface TermsPageProps {
  onOpenDemo?: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onOpenDemo }) => {
  const navigate = useNavigate();

  return (
    <TermsAndConditions
      onBackToHome={() => navigate(ROUTES.HOME)}
      onOpenDemo={onOpenDemo}
    />
  );
};

export default TermsPage;
