import { useNavigate } from "react-router-dom";
import styles from "../../Styles/home/dealsOfDay.module.css";

const DayCard = ({ props }) => {
  const { img, title, discount, strike, price } = props;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/productdetails/${title}`);
        localStorage.setItem("frequently", JSON.stringify("Covid Essentials"));
      }}
      className={styles.card}
    >
      <div>
        <div className={styles.discount}>{discount}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90%"
          }}
        >
          <div style={{ padding: "20px", boxSizing: "border-box" }}>
            <img
              style={{ maxWidth: "90%", maxHeight: "90%" }}
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
      <p>{title}</p>
      <div style={{ color: "gray" }}>
        MRP <s>{strike}</s>
      </div>
      <div style={{ fontWeight: "bold", color: "#55585e" }}>{price}</div>
    </div>
  );
};

export { DayCard };
