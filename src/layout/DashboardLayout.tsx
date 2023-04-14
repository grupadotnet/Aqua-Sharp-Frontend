import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const { t } = useTranslation();
  return (
    <div id="wrapper">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"></ul>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav className="bg-white topbar mb-4 static-top shadow"></Nav>
          <Container fluid>{children}</Container>
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
  );
};

export default DashboardLayout;
