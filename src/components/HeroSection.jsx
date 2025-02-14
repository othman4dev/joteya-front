import logo from "../assets/images/jot.svg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <img src={logo} alt="Jotaya " className="hero-logo" />
          <h2 className="hero-subtitle">
            {t("Moroccan Joteya 100% en ligne.")}
          </h2>
        </div>
        <div className="hero-items">
          <div className="items-line">
            <div className="hero-item"></div>
          </div>
          <div className="items-line">
            <div className="hero-item"></div>
            <div className="hero-item"></div>
          </div>
          <div className="items-line">
            <div className="hero-item"></div>
            <div className="hero-item"></div>
            <div className="hero-item"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
