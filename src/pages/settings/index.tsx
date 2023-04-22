import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Input,
  LanguageDropdown,
  PasswordInput,
  Tile,
} from '@/components';

export const Settings: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h3 className="mb-4">Profil</h3>
      <Row>
        <Col md>
          <Tile title="Zmiana hasła">
            <Form className="px-3">
              <div className="d-flex flex-column my-3 px-auto">
                <Form.Group controlId="oldPassword" className="my-2">
                  <PasswordInput placeholder="Stare hasło" />
                </Form.Group>
                <Form.Group controlId="newPassword" className="my-2">
                  <PasswordInput placeholder="Nowe hasło" />
                </Form.Group>
                <Form.Group controlId="rePassword" className="my-2">
                  <PasswordInput placeholder="Powtórz hasło" />
                </Form.Group>
                <div className="my-2"></div>
                <Button variant="success" type="submit">
                  Zmień hasło
                </Button>
              </div>
            </Form>
          </Tile>
        </Col>
        <Col md className="mb-4">
          <Tile title="Zmiana pytania kontrolnego">
            <Form className="px-3">
              <div className="d-flex flex-column my-3 px-auto">
                <Form.Group controlId="password" className="my-2">
                  <PasswordInput placeholder="Hasło" />
                </Form.Group>
                <Form.Group controlId="question" className="my-2">
                  <Input placeholder="Pytanie" />
                </Form.Group>
                <Form.Group controlId="answer" className="my-2">
                  <Input placeholder="Odpowiedź" />
                </Form.Group>
                <div className="my-2"></div>
                <Button variant="success" type="submit">
                  Zmień pytanie
                </Button>
              </div>
            </Form>
          </Tile>
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <Tile title="Język">
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
