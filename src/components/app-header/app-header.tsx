import headerStyles from "./app-header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function AppHeader() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const location = useLocation();
  const [activePage, setActivePage] = useState("Главная");

  useEffect(() => {
    // Определите активную страницу на основе URL
    switch (location.pathname) {
      case "/":
        setActivePage("Главная");
        break;
      case "/about":
        setActivePage("О нас");
        break;
      case "/portfolio":
        setActivePage("Портфолио");
        break;
      case "/contacnts":
        setActivePage("Контакты");
        break;
      default:
        setActivePage("");
        break;
    }
  }, [location.pathname]);

  console.log(activePage);

  return (
    <header className={`${headerStyles.header} pl-15 pr-15 pb-0 pt-0`}>
      <div className={`${headerStyles.boxLang}`}>
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className={headerStyles.languageSelect}
        >
          <option value="ru">Русский</option>
          <option value="en">English</option>
          <option value="turc">Türkçe</option>
        </select>
      </div>
      <div className={`${headerStyles.boxLeft}`}>
        <Link
          to="/"
          className={`${headerStyles.menu} ${
            activePage === "Главная" ? headerStyles.active : ""
          }`}
        >
          <p className={`${headerStyles.menuText}`}>{t("header.home")}</p>
        </Link>
        <Link
          to="/about"
          className={`${headerStyles.menu} ${
            activePage === "О нас" ? headerStyles.active : ""
          }`}
        >
          <p className={`${headerStyles.menuText}`}>{t("header.about")}</p>
        </Link>
        <Link
          to="/сollection"
          className={`${headerStyles.menu} ${
            activePage === "Портфолио" ? headerStyles.active : ""
          }`}
        >
          <p className={`${headerStyles.menuText}`}>{t("header.portfolio")}</p>
        </Link>
        <Link
          to="/contacnts"
          className={`${headerStyles.menu} ${
            activePage === "Контакты" ? headerStyles.active : ""
          }`}
        >
          <p className={`${headerStyles.menuText}`}>{t("header.contacts")}</p>
        </Link>
      </div>
      <Link to="/" className={`${headerStyles.logo}`}>
        <img
          src={require("../../images/logo2.jpg")}
          alt="логотип"
          width={100}
        />
      </Link>
    </header>
  );
}

export default AppHeader;
