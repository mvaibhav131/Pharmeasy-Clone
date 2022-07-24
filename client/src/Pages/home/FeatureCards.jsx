import styles from "../../Styles/home/featuredBrand.module.css";
import { useNavigate } from "react-router-dom";

const FeatureCards = ({ props }) => {
  const { img, title, link } = props;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(link)} className={styles.cards}>
      <center>
        <img width="140px" src={img} alt="" />
      </center>
      <hr
        style={{
          border: "2px solid lightgray",
          width: "90%",
          margin: "auto",
          marginTop: "10px"
        }}
      />
      <p>
        <b>{title}</b>
      </p>
    </div>
  );
};

export { FeatureCards };
