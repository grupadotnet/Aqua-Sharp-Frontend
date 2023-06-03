import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import {
  PasswordInput,
  Tile,
  Title,
  Input,
  Button,
  LanguageDropdown,
} from '@/components';

const FirstRun = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col className="mb-4">
          <Title title={t('first run', { ns: 'common' })} />

          <Tile header={t('set password and question', { ns: 'common' })}>
            <Form className="px-3">
              <div className="d-flex flex-column my-3 px-auto">
                <Row>
                  <Col>
                    {' '}
                    <Form.Group controlId="password" className="my-2">
                      <PasswordInput placeholder={t('password')} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="rePassword" className="my-2">
                      <PasswordInput placeholder={t('repeat password')} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>                  <Form.Group controlId="question" className="my-2">
                    <Input placeholder={t('question')} />
                  </Form.Group>
                  <Form.Group controlId="answer" className="my-2">
                    <Input placeholder={t('answer')} />
                  </Form.Group></Col>

                </Row>

                <div className="my-2"></div>
                <Button variant="success" type="submit">
                  {t('apply', { ns: 'configuration' })}
                </Button>
              </div>
            </Form>
          </Tile>
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <Tile header={t('language', { ns: 'common' })}>
            <div className="mr-5">
              <LanguageDropdown />
            </div>
          </Tile>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstRun;
