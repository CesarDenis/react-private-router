import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Input } from 'reactstrap';

import fakeAuth from '../../../util/fakeAuth';

const SignIn = () => {
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
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <Input type="email" name="email" id="email" placeholder="Email" />

      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />

      <Button color="primary" block type="submit">
        Sign in
      </Button>

      <p className="mt-3">
        Don't have an account? <Link to="/signup">Register</Link>
      </p>
    </form>
  );
};

export default SignIn;
