import { useTranslation } from "react-i18next";
import SliderMain from "../components/slider/slider";
import styles from "./mainPage-styles.module.css";

function MainPage() {
  const { t } = useTranslation();
  return (
    <div className={styles.app}>
      <div className={`${styles.main}`}>
        <SliderMain />
        <p className={`${styles.aboutusText}`}>
        {t("main.title")} <br /> <br />
        {t("main.text1")} <br /> <br />
        {t("main.text2")}
          <br /> <br /> <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default MainPage;
