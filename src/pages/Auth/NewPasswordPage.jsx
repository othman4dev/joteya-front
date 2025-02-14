import NewPasswordForm from "../../components/Auth/NewPasswordForm";
import Header from "../../components/Header";

const NewPasswordPage = () => {
  return (
    <>
      <Header />
      <div className="auth-form-container forgot-form">
        <NewPasswordForm />
      </div>
      <p className="copy">© 2025 Joteya. All rights reserved.</p>
    </>
  );
};

export default NewPasswordPage;
