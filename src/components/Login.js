import { Link } from "react-router-dom";

const { useState } = require("react");
const { Form, FormGroup, FormControl, Button } = require("react-bootstrap");

function Login() {
  const [emailPage, setEmailPage] = useState(true);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    favClass: "1",
  });
  const [errorValues, setErrorValues] = useState({
    email: false,
    password: false,
  });

  function validateEmail() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (formValues.email.length > 0 && !formValues.email.match(validRegex)) {
      handleEmailError(true);
    } else if (
      formValues.email.length === 0 ||
      formValues.email.match(validRegex)
    ) {
        handleEmailError(false);
    }
  }
  function validatePass() {
    var validRegex = /[a - zA - Z0 - 9]/;
    if (
      formValues.password.length > 0 &&
      (formValues.password.length < 6 || !formValues.password.match(validRegex))
    ) {
      handlePasswordError(true);
    } else if (
      formValues.password.length === 0 ||
      (formValues.password.length >= 6 && formValues.password.match(validRegex))
    ) {
      handlePasswordError(false);
    }
  }

  const handleEmailError = (e) => {
    setErrorValues({ ...errorValues, email: e });
  };
  const handlePasswordError = (e) => {
    setErrorValues({ ...errorValues, password: e });
  };
  const handleEmailChange = (e) => {
    validateEmail();
    setFormValues({ ...formValues, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    validatePass();
    setFormValues({ ...formValues, password: e.target.value });
  };

  const clickNext = () => {
    if (emailPage && !errorValues.email) {
      setEmailPage(false);
    }
  };
  function getNextButton() {
    if (emailPage) {
      return (
        <Button type="submit" onClick={clickNext}>
          Siguiente
        </Button>
      );
    }

    return (
      <Link to="/inventory">
        <Button type="submit">Siguiente</Button>
      </Link>
    );
  }


  function getContent() {
    if (emailPage) {
      return (
        <Form>
          <h2>Acceder</h2>
          <h3>Usa tu Cuenta de UniAlpes</h3>
          <FormGroup>
            <FormControl
              type="text"
              id="username"
              placeholder="Enter email"
              value={formValues.email}
              onChange={handleEmailChange}
              isInvalid={errorValues.email}
            />
            <Form.Text className="text-muted">
              {errorValues.email
                ? "Your email should follow an established format"
                : "We'll never share your email with anyone else."}
            </Form.Text>
          </FormGroup>
          <a href="https://www.google.com">¿Olvidaste tu correo electrónico?</a>
          <div>
            <a href="https://www.google.com">Crear cuenta</a>
            {getNextButton()}
          </div>
        </Form>
      );
    }
    return (
      <Form>
        <h2>{formValues.email}</h2>
        <FormGroup>
          <FormControl
            type="password"
            id="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handlePasswordChange}
            isInvalid={errorValues.password}
          />
          <Form.Text className="text-muted">
            Your password should be have numbers and letters and should be at
            least 6 char long.
          </Form.Text>
        </FormGroup>
        <div className="d-flex justify-content-center">
          <a href="https://www.google.com">Crear cuenta</a>
          {getNextButton()}
        </div>
      </Form>
    );
  }
  return <div className="login-page">{getContent()}</div>;
}

export default Login;
