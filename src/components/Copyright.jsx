import { useTranslation } from "react-i18next";

const Copyright = () => {
  const { t } = useTranslation();
  return <p className="copy">{t("© 2025 Joteya. All rights reserved.")}</p>;
};

export default Copyright;
