import { Form } from "react-router-dom";

const SignUp = () => {
  return (
    <div
      className="oe_website_login_container flex-grow-1 card mt-5 shadow signup-content"
      style={{ maxWidth: "350px" }}
    >
      <span className="o_logo d-block mx-auto mt-4"></span>
      <div className="card-body">
        <div className="alert alert-info">
          <p>Access and manage your instances from this Odoo account.</p>
        </div>
        <Form
          className="oe_signup_form o_odoo_enterprise_sign"
          role="form"
          method="post"
        >
          <input
            type="hidden"
            name="csrf_token"
            value="08e81b7bfc3bdc72253aaac4ba1ae1488908139ao1748014460"
          />

          <div className="mb-3 field-login">
            <label htmlFor="login">Your Email</label>
            <input
              type="text"
              name="login"
              id="login"
              className="form-control form-control-sm"
              autoFocus="autofocus"
              autoCapitalize="off"
              required="required"
              data-bs-original-title=""
              title=""
            />
          </div>

          <div className="mb-3 field-name">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control form-control-sm"
              placeholder="e.g. John Doe"
              required="required"
            />
          </div>

          <div className="col-12 py-2 field-password odoo-password-reveal">
            <label htmlFor="password" className="col-form-label form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                className="form-control"
                required="required"
                name="password"
                minLength="8"
              />

              <button className="btn btn-secondary" type="button">
                <i className="fa fa-eye"></i>
              </button>
            </div>
          </div>

          <input type="hidden" name="redirect" />
          <input type="hidden" name="token" />
          <div className="text-center oe_login_buttons d-grid pt-3">
            <button type="submit" className="btn btn-primary float-start">
              Sign up
            </button>
            <a
              className="btn btn-link float-end"
              href="/web/login"
              data-bs-original-title=""
              title=""
            >
              I already have an account
            </a>
            <div className="o_login_auth"></div>
          </div>
        </Form>
        <div className="col-auto text-muted mt8 mb16" style={{lineHeight: "1.0"}}>
          <small>
            <i className="fa fa-info-circle"></i>
            We will handle your personal data as described in our
            <a href="/privacy" target="_blank" className="link-muted">
              Privacy Policy
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
