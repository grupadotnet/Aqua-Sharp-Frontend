import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Header, Sidebar, Splitbutton } from '@/components';
import { ProtectedRoute } from '@/controllers/ProtectedRoute';

type Props = {
  children: React.ReactNode;
  username: string;
};

const DashboardLayout = ({ children, username }: Props) => {
  const { t } = useTranslation();

  return (
    <ProtectedRoute>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header username={username}></Header>
            <Container fluid>{children}</Container>
            <Splitbutton />
          </div>

          <footer className="sticky-footer bg-white">
            <Container className="my-auto">
              <div className="copyright text-center my-auto">
                <span>{t('AquaSharp - Scientific Circle PIMI 2023')}</span>
              </div>
            </Container>
          </footer>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
