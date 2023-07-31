import { useEffect, useState } from "react";
import Chevron from "../../../../components/Chevron";
import styles from "./styles.module.scss";

type PicturesProps = {
  pictures: string[];
};

const Carousel = ({ pictures }: PicturesProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [picture, setPicture] = useState<string>(pictures[currentIndex]);

  const previousPicture = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextPicture = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    setPicture(pictures[currentIndex]);
  }, [previousPicture, nextPicture]);

  return (
    <div className={styles.slideshowContainer}>
      {pictures.length > 1 ? (
        <button className={styles.prev} onClick={previousPicture}>
          <Chevron rotate="rotate(90)" />
        </button>
      ) : (
        ""
      )}
      {pictures.length > 1 ? (
        <button className={styles.next} onClick={nextPicture}>
          <Chevron rotate="rotate(-90)" />
        </button>
      ) : (
        ""
      )}

      <figure className={styles.mediaContainer} key={`figure${currentIndex}`}>
        <img key={currentIndex} src={picture} alt={picture} />
        {pictures.length > 1 ? (
          <figcaption key={`caption${currentIndex}`}>{`${currentIndex + 1}/${
            pictures.length
          }`}</figcaption>
        ) : (
          ""
        )}
      </figure>
    </div>
  );
};

export default Carousel;
