import { useTranslation } from "react-i18next";
import styles from "./pages-styles.module.css";

function AboutUsPage() {
  const { t } = useTranslation();
  return (
    <div className={styles.aboutusMain}>
      <div className={styles.aboutus}>
        <div className={styles.aboutusImg}>
          <img
            src={require("../images/Liza1 (5).jpg")}
            width="auto"
            height="100%"
            alt="sweemsuit"
          />
        </div>{" "}
        <div>
          <p className={`${styles.aboutusText}`}>
            {t("main.text1")}
            <br /> <br />
            {t("main.text2")} <br /> <br /> <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
