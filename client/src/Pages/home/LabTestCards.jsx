import { useNavigate } from "react-router-dom";
import styles from "../../Styles/home/labTest.module.css";

const LabTestCards = ({ props }) => {
  const { img, title, price } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.box} onClick={() => navigate("/rtpcr")}>
      <div>
        <img width="60px" style={{ marginBottom: "16px" }} src={img} alt="" />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <p>{title}</p>
        <p>Available at 1 cerified Lab</p>
      </div>
      <div className={styles.bottomDiv}>
        <div style={{ color: "#55585e" }}>
          <b>{price}</b> Onwards
        </div>
        <div style={{ color: "teal" }}>
          <b>Book Now {">"}</b>
        </div>
      </div>
    </div>
  );
};

export { LabTestCards };
