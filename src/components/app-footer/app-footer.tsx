import { FaInstagram, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";
import styles from "./app-footer.module.css";

function AppFooter() {
  return (
    <footer className={`${styles.footer} `}>
      {" "}
      <div className={styles.footerContainer}>
        <p className={`${styles.text} `}>2023, Alanya</p>
        <div className={styles.contactBox}>
          <a className={styles.contactpageContacts} href="tel:+79215575528">
            <FaPhone /> +7 903 388 36 01
          </a>
          <a
            className={styles.contactpageContacts}
            href="https://www.instagram.com/csc_cut_sew_create/"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            className={styles.contactpageContacts}
            href="https://wa.me/79215575528?text=What%about%20в%swimsuit"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            className={styles.contactpageContacts}
            href="https://t.me/79215575528"
          >
            <FaTelegram /> Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
