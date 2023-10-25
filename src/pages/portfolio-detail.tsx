import { useParams } from "react-router-dom";
import styles from "./pages-styles.module.css";
import { portfolioInfo } from "../utils/data";

interface RouteParams {
  photoId: string;
}

function PortfolioDetailPage() {
  const { photoId } = useParams<RouteParams>();

  const photoIdAsNumber = parseInt(photoId, 10);

  const profileInfo = portfolioInfo.find((item) => item.id === photoIdAsNumber);

  return (
    <div className={styles.main}>
      <h2>Детальная информация (размерная сетка, разные фото)</h2>
      <p>{profileInfo?.informationAbot}</p>
      {profileInfo !== undefined && profileInfo.otherFotos !== undefined && (
        <div className={styles.portfolioImages}>
          {profileInfo.otherFotos.map((item, index) => (
            <div key={index}>
              <div className={styles.portfolioImage}>
                <img src={item} alt={"фото"} />
              </div>{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PortfolioDetailPage;
