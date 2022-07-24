import styles from "../../Styles/home/appDownload.module.css";

const AppDownload = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>Simplifying Healthcare, Impacting Lives</p>
        <p>Download the App for free</p>
        <div className={styles.appStores}>
          <div>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer"
            >
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/4e4f1cab.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
            >
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/83095c03.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          style={{ height: "329px", width: "110%" }}
          src="https://assets.pharmeasy.in/web-assets/dist/1d1ccea7.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export { AppDownload };
