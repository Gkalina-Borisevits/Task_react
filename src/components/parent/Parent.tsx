import { FC } from "react";
import FlowerCard from "../flowerCard/FlowerCard";
// import cn from 'classnames'
import styles from "./Parent.module.css";

const Parent: FC = () => {
  const roza = {
    color: "aquamarine",
    title: "roza",
    price: 40,
  };

  const romashka = {
    color: "lime",
    title: "Romaschka",
    family: "Астровые",
    price: 25,
  };

  const orchid = {
    color: "lavender",
    title: "Orchid",
    price: 10000,
  };

  const me = {
    name: "Dima",
    job: "coder",
    age: 30,
  };

  const galina = {
    name: "Galina",
    job: "coder",
  };

  const howManyAuthors = 1;

  return (
    <div className={styles.container}>
      <div className={styles.flowerCard}>
        <FlowerCard
          flower={romashka}
          author={me}
          howManyAuthors={howManyAuthors}
        />
      </div>
      <div className={styles.flowerCard}>
        <FlowerCard flower={roza} />
      </div>
      <div className={styles.flowerCard}>
        <FlowerCard flower={orchid} author={galina} />
      </div>
    </div>
  );
};

export default Parent;
