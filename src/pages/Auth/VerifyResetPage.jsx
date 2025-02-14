import Header from "../../components/Header";
import VerifyResetForm from "../../components/Auth/VerifyResetFrom";

const VerifyResetPage = () => {
  return (
    <>
      <Header />
      <div className="auth-form-container forgot-form">
        <VerifyResetForm />
      </div>
      <p className="copy">© 2025 Joteya. All rights reserved.</p>
    </>
  );
};

export default VerifyResetPage;
