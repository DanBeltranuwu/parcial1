import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

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
    if (emailPage && !errorValues.email && formValues.email.length > 0) {
      setEmailPage(false);
    }
  };
  function getNextButton() {
    if (emailPage) {
      return (
        <Button type="submit" onClick={clickNext}>
          <FormattedMessage id="next" />
        </Button>
      );
    }

    return (
      <Link to="/inventory">
        <Button type="submit">
          <FormattedMessage id="next" />
        </Button>
      </Link>
    );
  }

  function getContent() {
    if (emailPage) {
      return (
        <Form>
          <h2>
            <FormattedMessage id="login" />
          </h2>
          <h3>
            <FormattedMessage id="uniAlpesAccount" />
          </h3>
          <FormGroup>
            <FormControl
              type="text"
              id="username"
              value={formValues.email}
              onChange={handleEmailChange}
              isInvalid={errorValues.email}
            />
            <Form.Text className="text-muted">
              {errorValues.email ? (
                <FormattedMessage id="emailError" />
              ) : (
                <FormattedMessage id="emailDisclaimer" />
              )}
            </Form.Text>
          </FormGroup>
          <a href="https://www.google.com">
            <FormattedMessage id="forgotEmail" />
          </a>
          <div>
            <a href="https://www.google.com">
              <FormattedMessage id="createAccount" />
            </a>
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
            value={formValues.password}
            onChange={handlePasswordChange}
            isInvalid={errorValues.password}
          />
          <Form.Text className="text-muted">
            <FormattedMessage id="passwordRequirements" />
          </Form.Text>
        </FormGroup>
        <div className="d-flex justify-content-center">
          <a href="https://www.google.com">
            <FormattedMessage id="createAccount" />
          </a>
          {getNextButton()}
        </div>
      </Form>
    );
  }
  return <div className="login-page">{getContent()}</div>;
}

export default Login;
