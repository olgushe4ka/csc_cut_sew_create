import styles from "./pages-styles.module.css";

function AboutUsPage() {
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
            Компания "Cut Sew Create" - это истинный мастер по созданию
            купальников и костюмов для плавания, вдохновленных красотой моря и
            природы. Мы специализируемся на производстве высококачественной
            пляжной одежды, которая сочетает в себе стиль, комфорт и
            функциональность.
            <br /> <br />
            Наши дизайнеры и портные уделяют особое внимание деталям, чтобы
            каждый купальник и костюм отражали индивидуальный стиль и
            потребности наших клиентов. Мы гордимся нашей работой и стремимся
            сделать плавание и загорание на пляже еще более приятным и модным.
            Независимо от того, нужен ли вам купальник для спортивного плавания,
            пляжного отдыха или фешенебельного курортного вида, компания "Cut
            Sew Create" гарантирует, что вы будете выглядеть уверенно и
            прекрасно в каждом сезоне. <br /> <br /> <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
