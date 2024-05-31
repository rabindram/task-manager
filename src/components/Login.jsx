import { Form } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="oe_website_login_container flex-grow-1 card mt-5 shadow login-content" style={{maxWidth: "350px"}}
      
    >
      <span className="o_logo d-block mx-auto mt-4"></span>
      <div className="card-body">
        <div className="alert alert-info text-center">
          <p>Access and manage your instances from this Odoo account.</p>
        </div>
        <Form
          className="oe_login_form o_odoo_enterprise_sign"
          role="form"
          method="post"
          onSubmit="this.action = '/web/login' + location.hash"
          action="/web/login"
        >
          <input
            type="hidden"
            name="csrf_token"
            value="dba6243d2d5b8d4f0ccfc1eb4366edc353c1cd52o1748012631"
          />

          <div className="mb-3 field-login">
            <label htmlFor="login" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              name="login"
              id="login"
              required="required"
              autoFocus="autofocus"
              autoCapitalize="off"
              className="form-control "
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
              />

              <button className="btn btn-secondary" type="button">
                <i className="fa fa-eye"></i>
              </button>
            </div>
          </div>

          <div className="clearfix oe_login_buttons text-center gap-1 d-grid mb-1 pt-3">
            <button type="submit" className="btn btn-primary float-start">
              Sign in
            </button>
            <div className="justify-content-between mt-2 d-flex small">
              <a href="/web/signup">Don't have an account?</a>
              <a href="/web/reset_password">Reset Password</a>
            </div>
            <div className="o_login_auth"></div>
          </div>

          <input type="hidden" name="redirect" />
        </Form>
      </div>
    </div>
  );
};

export default Login