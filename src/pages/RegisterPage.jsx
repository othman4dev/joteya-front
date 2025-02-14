import Register from "../components/RegisterForm";
import Header from "../components/Header";
import Copyright from "../components/Copyright";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="auth-form-container register">
        <Register />
      </div>
      <Copyright />
    </>
  );
};

export default LoginPage;
