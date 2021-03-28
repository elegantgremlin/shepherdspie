import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Col, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  const { onLogin } = props;

  const [username, setUsername] = useState('');
  const [password, setPaassword] = useState('');

  function clickLogin() {
    onLogin(username, password);
  }

  return (
    <>
      <Form className="loginForm">
        <FormGroup row>
          <Label for="loginEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="loginEmail"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="loginPass" sm={2}>Password</Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="loginPass"
              placeholder="Password"
              value={password}
              onChange={(e) => setPaassword(e.target.value)}
            />
          </Col>
        </FormGroup>
        <Button block color="primary" onClick={clickLogin}>Login</Button>
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
