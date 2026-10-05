import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteAccount } from '../../components';
import { ROUTES } from '../../routes';

export interface DeleteAccountPageProps {
  onOpenDemo?: () => void;
}

export const DeleteAccountPage: React.FC<DeleteAccountPageProps> = ({ onOpenDemo }) => {
  const navigate = useNavigate();

  return (
    <DeleteAccount
      onBackToHome={() => navigate(ROUTES.HOME)}
      onOpenDemo={onOpenDemo}
    />
  );
};

export default DeleteAccountPage;
