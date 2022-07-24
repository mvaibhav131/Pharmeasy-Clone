import styles from "../../Styles/home/justOffer.module.css";

const OfferBox = ({ props }) => {
  const { img, title, code } = props;
  return (
    <div className={styles.offerBox}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p style={{ fontSize: "14px", marginBottom: "10px" }}>{title}</p>
        <p>
          Code: <b>{code}</b>
        </p>
      </div>
    </div>
  );
};

export { OfferBox };
