import React, { createContext, useState } from 'react';

import Cookies from 'universal-cookie';

import { User } from '@/types/config/login';

export const AuthorizationContext = createContext<
  [User | undefined, React.Dispatch<React.SetStateAction<User>>] | undefined
>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AuthorizationProvider = ({ children }: Props) => {
  const cookies = new Cookies();
  const [user, setUser] = useState<User>({
    isLogged: cookies.get('Authorization'),
  });

  return (
    <AuthorizationContext.Provider value={[user, setUser]}>
      {children}
    </AuthorizationContext.Provider>
  );
};
