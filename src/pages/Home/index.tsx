import styles from "./styles.module.scss";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { useEffect, useState } from "react";
import Data, { getAll } from "../../API/api.js";
import Card from "./components/Card/index.js";

const Home = () => {
  const [accommodations, setAccommodations] = useState<Data[]>([]);

  const loadAccommodations = async () => {
    setAccommodations(await getAll());
  };

  useEffect(() => {
    loadAccommodations();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Banner bannerClass={"homeBackground"} />
        <section className={styles.cards}>
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} accommodation={accommodation} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
