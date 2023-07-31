import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data, { getById } from "../../API/api";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import Star from "./components/Star";
import Carousel from "./components/Carousel";
import Collapse from "../../components/Collapse";

const Accomodation = () => {
  const [accommodation, setAccommodation] = useState<Data>();
  const { id } = useParams<string>();
  const navigate = useNavigate();

  const loadAccommodation = async () => {
    if (!id) {
      return navigate("/not-found");
    }
    const acc = await getById(id);
    if (!acc) {
      return navigate("/not-found");
    }
    setAccommodation(acc);
  };

  useEffect(() => {
    loadAccommodation();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {accommodation && (
        <main>
          <Carousel pictures={accommodation.pictures} />
          <section className={styles.accommodationInfo}>
            <div className={styles.accommodationContent}>
              <div className={styles.accommodationTitle}>
                <h1>{accommodation.title}</h1>
                <h3>{accommodation.location}</h3>
              </div>
              <ul className={styles.accommodationTags}>
                {accommodation.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <ul className={styles.accommodationRating}>
                {[...Array(5)].map((_, index) => {
                  index++;
                  return (
                    <li key={index}>
                      <Star
                        color={
                          index <= parseInt(accommodation.rating)
                            ? "#FF6060"
                            : "#E3E3E3"
                        }
                      />
                    </li>
                  );
                })}
              </ul>
              <div className={styles.accommodationHost}>
                <h2>{accommodation.host.name}</h2>
                <img
                  src={accommodation.host.picture}
                  alt={accommodation.host.name}
                />
              </div>
            </div>
            <Collapse
              size={"md"}
              content={[
                {
                  value: "Description",
                  description: accommodation.description,
                },
                {
                  value: "Équipements",
                  description: accommodation.equipments,
                },
              ]}
            />
          </section>
        </main>
      )}
    </div>
  );
};

export default Accomodation;
