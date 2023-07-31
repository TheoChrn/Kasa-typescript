import { useState } from "react";
import Chevron from "../Chevron";
import styles from "./styles.module.scss";

type ContentProps = {
  value: string;
  description: string | string[];
};

type CollapseProps = {
  content: ContentProps[];
  size?: string;
};

const CollapseButton = ({ content }: { content: ContentProps }) => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={styles.collapse}>
      <button className={styles["collapse__btn"]} onClick={toggleCollapse}>
        {content.value}
        {open ? <Chevron rotate={"rotate(-180)"} /> : <Chevron />}
      </button>
      {open && (
        <div className={styles["collapse__content"]}>
          {Array.isArray(content.description) ? (
            <ul>
              {content.description.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          ) : (
            <span>{content.description}</span>
          )}
        </div>
      )}
    </div>
  );
};

const Collapse = ({ size = "full", content }: CollapseProps) => {
  return (
    <section className={`${styles.collapses} ${styles[`collapses--${size}`]}`}>
      {content.map((c, index) => (
        <CollapseButton key={index} content={c} />
      ))}
    </section>
  );
};

export default Collapse;
