import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import Copyright from "../components/Copyright";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="auth-form-container">
        <LoginForm />
      </div>
      <Copyright />
    </>
  );
};

export default LoginPage;
