import VerifyForm from "../components/VerifyForm";
import Header from "../components/Header";
import Copyright from "../components/Copyright";

const VerifyPage = () => {
  return (
    <>
      <Header />
      <div className="auth-form-container forgot-form">
        <VerifyForm />
      </div>
      <Copyright />
    </>
  );
};

export default VerifyPage;
