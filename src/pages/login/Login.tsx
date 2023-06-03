import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Cookies from 'universal-cookie';

import { Button, PasswordInput } from '@/components';
import { useAuthorization } from '@/hooks';
import { api } from '@/services/axios';
import { Login as LoginType } from '@/types/config/login';

const Login = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<LoginType>({} as LoginType);
  const [error, setError] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUser] = useAuthorization();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post('Config/login', {
        password: data.password,
      })
      .then((res) => {
        if (res.data && res.status === 200) {
          const date = new Date();
          cookies.set('Authorization', res.data, {
            expires: new Date(date.setDate(date.getDate() + 1)),
          });
          setUser({ username: 'Wiktor', isLogged: true });
          navigate('/');
        } else {
          setError(t('Something went wrong', { ns: 'common' }));
        }
      })
      .catch(() => setError(t('Something went wrong', { ns: 'common' })));
  };

  return (
    <form onSubmit={login}>
      <PasswordInput onChange={(e) => setData({ password: e.target.value })} />
      {error}
      <Button variant="primary" type="submit">
        {t('log in', { ns: 'configuration' })}
      </Button>
    </form>
  );
};

export default Login;
