import ResetForm from "../../components/Auth/ResetForm";
import Header from "../../components/Header";

const ResetPage = () => {
  return (
    <>
      <Header />
      <div className="auth-form-container forgot-form">
        <ResetForm />
      </div>
      <p className="copy">© 2025 Joteya. All rights reserved.</p>
    </>
  );
};

export default ResetPage;
