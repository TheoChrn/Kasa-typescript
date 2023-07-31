import styles from "./styles.module.scss";

type BannerProps = {
  bannerClass: string;
};

const Banner = ({ bannerClass }: BannerProps) => {
  return (
    <div className={styles.bannerContainer}>
      <figure
        className={`${styles.background} ${styles[bannerClass]}`}
      ></figure>
      {bannerClass === "homeBackground" && (
        <h1>Chez vous, partout et ailleurs</h1>
      )}
    </div>
  );
};

export default Banner;
