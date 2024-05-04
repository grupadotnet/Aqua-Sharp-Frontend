import { useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Cookies from 'universal-cookie';

import { Input, PasswordInput } from '@/components';
import FullWidthButton from '@/components/button/FullWidthButton';
import { useAuthorization } from '@/hooks';
import { api } from '@/services/axios';
import { Login as LoginType } from '@/types/config/login';

const Login = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUser] = useAuthorization();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post('Auth/login', {
        password,
        login: username,
      })
      .then((res) => {
        if (res.data && res.status === 200) {
          const date = new Date();
          cookies.set('Authorization', res.data, {
            expires: new Date(date.setDate(date.getDate() + 1)),
          });
          setUser({ username, isLogged: true });
          navigate('/');
        } else {
          setError(t('Something went wrong', { ns: 'common' }));
        }
      })
      .catch(() => setError(t('Something went wrong', { ns: 'common' })));
  };

  return (
    <Row className="vh-100 justify-content-center align-items-center">
      <Card style={{ width: '24rem', padding: '30px' }}>
        <Row className="justify-content-center">
          <h3 className="pb-4 text-first-upper">
            {t('welcome back', { ns: 'common' })}
          </h3>
        </Row>
        <form onSubmit={login}>
          <div className="pb-3">
            <Input
              placeholder={t('username', { ns: 'common' })}
              onChange={(e) => setUsername(e.target.value)}
            />
            <PasswordInput
              placeholder={t('password', { ns: 'common' })}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-danger pb-3 m-0">{error}</p>
          <FullWidthButton variant="primary" type="submit">
            {t('log in', { ns: 'configuration' })}
          </FullWidthButton>
        </form>
      </Card>
    </Row>
  );
};

export default Login;
