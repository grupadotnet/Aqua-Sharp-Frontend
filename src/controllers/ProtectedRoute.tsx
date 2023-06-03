import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthorization } from '@/hooks';

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
  const [user] = useAuthorization();

  console.log(user);

  if (!user?.isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};
