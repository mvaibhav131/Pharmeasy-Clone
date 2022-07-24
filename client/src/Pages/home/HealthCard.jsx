import styles from "../../Styles/home/healthArticles.module.css";

const HealthCard = ({ props }) => {
  const { img, title, para, link } = props;
  return (
    <a
      target={"_blank"}
      rel="noreferrer"
      style={{ textDecoration: "none" }}
      href={link}
    >
      <div className={styles.card}>
        <img width={"100%"} src={img} alt="" />
        <p style={{ color: "#515a60" }}>
          <b>{title}</b>
        </p>
        <p className={styles.para}>{para}</p>
        <p style={{ color: "teal", fontSize: "14px" }}>
          <b>Read More{" >"}</b>
        </p>
      </div>
    </a>
  );
};

export { HealthCard };
