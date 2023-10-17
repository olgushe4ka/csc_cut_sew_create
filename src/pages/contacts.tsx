import { useTranslation } from "react-i18next";
import styles from "./pages-styles.module.css";
import { FaInstagram, FaWhatsapp, FaTelegram, FaPhone } from "react-icons/fa";

function Contacnts() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={`${styles.contactpage} `}>
        {" "}
        <div>
          <h2 className={styles.contactpageH2}>{t("contacts.header")}</h2>
          <div className={styles.contactpageLocation}>
            <strong> {t("contacts.adress")}</strong>
          </div>

          <div>
            <strong>{t("contacts.telephone")}</strong>
            <a className={styles.contactpageContacts} href="tel:+79215575528">
            &nbsp;  + 7 921 557 55 28
              </a>
          </div>
          <br />
          <br />
          <div>
            <strong>{t("contacts.callus")}</strong>
            <p>
              <a className={styles.contactpageContacts} href="tel:+79215575528">
                <FaPhone /> {t("contacts.call")}
              </a>
            </p>

            <p>
              <a
                className={styles.contactpageContacts}
                href="https://www.instagram.com/csc_cut_sew_create/"
              >
                <FaInstagram /> Instagram
              </a>
              <br /> <br />
              <a
                className={styles.contactpageContacts}
                href="https://wa.me/79215575528?text=What%about%20в%swimsuit"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <br /> <br />
              <a
                className={styles.contactpageContacts}
                href="https://t.me/79215575528"
              >
                <FaTelegram /> Telegram
              </a>
            </p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Contacnts;
