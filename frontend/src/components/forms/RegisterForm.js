import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Col, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

const RegisterForm = (props) => {
  const { onRegister } = props;

  const [username, setUsername] = useState('');
  const [password, setPaassword] = useState('');

  function clickRegister() {
    onRegister(username, password);
  }

  return (
    <Form className="registerForm">
      <FormGroup row>
        <Label for="registerEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="registerEmail"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="registerPass" sm={2}>Password</Label>
        <Col sm={10}>
          <Input
            type="password"
            name="password"
            id="registerPass"
            placeholder="Password"
            value={password}
            onChange={(e) => setPaassword(e.target.value)}
          />
        </Col>
      </FormGroup>
      <Button block color="primary" onClick={clickRegister}>Register</Button>
    </Form>
  );
};

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
