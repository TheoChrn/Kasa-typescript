import { NavLink } from "react-router-dom";
import Data from "../../../../API/api";
import styles from "./styles.module.scss";

type CardProps = {
  accommodation: Data;
};

const Card = ({ accommodation }: CardProps) => {
  return (
    <NavLink to={`accomodations/${accommodation.id}`}>
      <article className={styles.card}>
        <figure>
          <img src={accommodation.cover} alt={`Image ${accommodation.title}`} />
          <h2>{accommodation.title}</h2>
        </figure>
      </article>
    </NavLink>
  );
};

export default Card;
