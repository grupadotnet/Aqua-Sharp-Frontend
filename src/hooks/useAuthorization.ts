import { useContext } from 'react';

import { AuthorizationContext } from '@/context/AuthorizationContext';

const useAuthorization = () => {
  const context = useContext(AuthorizationContext);

  if (!context) {
    throw new Error('useAuthorization cannot be used within provider');
  }

  return context;
};

export default useAuthorization;
