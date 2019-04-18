import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Input } from 'reactstrap';

import fakeAuth from '../../../util/fakeAuth';

const SignUp = () => {
  const [redirect, setRedirect] = useState(false);

  function login(e) {
    e.preventDefault();

    fakeAuth.authenticate(() => {
      setRedirect(true);
    });
  }

  if (redirect === true) {
    return <Redirect to="/" />;
  }

  return (
    <form className="form-signin text-center" onSubmit={login}>
      <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
      <Input name="name" id="name" autoFocus placeholder="Name" />

      <Input type="email" name="email" id="email" placeholder="Email" />

      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />

      <Button color="primary" block type="submit">
        Sign up
      </Button>

      <p className="mt-3">
        You have an account? <Link to="/signin">Sign in</Link>
      </p>
    </form>
  );
};

export default SignUp;
