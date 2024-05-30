import "./Login.css";

const Login = () => {
  return (
    <div>
      <h2 className="Login ">Login</h2>
      <div className="CreateAccount">
        <p className="para">
          or
          <a style={{ marginLeft: "8px" }} className="createlink">
            create your account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
