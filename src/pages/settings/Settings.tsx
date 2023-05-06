import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Input,
  LanguageDropdown,
  PasswordInput,
  Tile,
  Title,
} from '@/components';

const Settings = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title title={t('profile')} />
      <Row>
        <Col md>
          <Tile title={t('password change')}>
            <Form className="px-3">
              <div className="d-flex flex-column my-3 px-auto">
                <Form.Group controlId="oldPassword" className="my-2">
                  <PasswordInput placeholder={t('old password')} />
                </Form.Group>
                <Form.Group controlId="newPassword" className="my-2">
                  <PasswordInput placeholder={t('new password')} />
                </Form.Group>
                <Form.Group controlId="rePassword" className="my-2">
                  <PasswordInput placeholder={t('repeat password')} />
                </Form.Group>
                <div className="my-2"></div>
                <Button variant="success" type="submit">
                  {t('change password')}
                </Button>
              </div>
            </Form>
          </Tile>
        </Col>
        <Col md className="mb-4">
          <Tile title={t('control question change')}>
            <Form className="px-3">
              <div className="d-flex flex-column my-3 px-auto">
                <Form.Group controlId="password" className="my-2">
                  <PasswordInput placeholder={t('password')} />
                </Form.Group>
                <Form.Group controlId="question" className="my-2">
                  <Input placeholder={t('question')} />
                </Form.Group>
                <Form.Group controlId="answer" className="my-2">
                  <Input placeholder={t('answer')} />
                </Form.Group>
                <div className="my-2"></div>
                <Button variant="success" type="submit">
                  {t('change question')}
                </Button>
              </div>
            </Form>
          </Tile>
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <Tile title={t('language')}>
            <div className="mr-5">
              <LanguageDropdown />
            </div>
          </Tile>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Settings;
