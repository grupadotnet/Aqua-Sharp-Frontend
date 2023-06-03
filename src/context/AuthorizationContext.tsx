import React, { createContext, useState } from 'react';

import { User } from '@/types/config/login';

export const AuthorizationContext = createContext<
  [User | undefined, React.Dispatch<React.SetStateAction<User>>] | undefined
>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AuthorizationProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({ isLogged: true });

  return (
    <AuthorizationContext.Provider value={[user, setUser]}>
      {children}
    </AuthorizationContext.Provider>
  );
};
