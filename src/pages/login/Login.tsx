import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, PasswordInput } from '@/components';
import { useAuthorization } from '@/hooks';
import { Login as LoginType } from '@/types/config/login';

const Login = () => {
  const [data, setData] = useState<LoginType>({} as LoginType);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUser] = useAuthorization();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data.password);
    setUser({ username: 'Wiktor', isLogged: true });
    navigate('/');
  };

  return (
    <form onSubmit={login}>
      <PasswordInput onChange={(e) => setData({ password: e.target.value })} />
      <Button variant="primary" type="submit">
        {t('log in', { ns: 'configuration' })}
      </Button>
    </form>
  );
};

export default Login;
