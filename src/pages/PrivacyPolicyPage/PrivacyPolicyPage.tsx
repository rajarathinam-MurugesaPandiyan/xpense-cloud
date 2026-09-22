import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivacyPolicy } from '../../components';
import { ROUTES } from '../../routes';

export interface PrivacyPolicyPageProps {
  onOpenDemo?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onOpenDemo }) => {
  const navigate = useNavigate();

  return (
    <PrivacyPolicy
      onBackToHome={() => navigate(ROUTES.HOME)}
      onOpenDemo={onOpenDemo}
    />
  );
};

export default PrivacyPolicyPage;
