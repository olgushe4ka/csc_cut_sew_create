import { Link } from "react-router-dom";
import { portfolioInfo } from "../utils/data";
import styles from "./pages-styles.module.css";

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h2>Портфолио</h2>
      <div className={styles.portfolioImages}>
        {portfolioInfo.map((item, index) => (
           <Link to={`/portfolio/${item.id}`} key={item.id}>
<div className={`${styles.portfolioImage} ${styles.hoverOpacity}`}>
            <img src={item.mainFoto} alt={item.title} />
            <p className={styles.portfolioTitle}>{item.title}</p>
          </div> </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;


