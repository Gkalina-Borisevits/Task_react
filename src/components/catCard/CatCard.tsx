import { FC, useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import styles from "./CatCard.module.css";

const CatCard: FC = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  function fetchCat(): void {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setText(data.fact));
  }

  function fetchCatImg(): void {
    fetch("https://cataas.com/cat").then((res) => setImg(res.url));
  }

  useEffect(() => {
    fetchCat();
    fetchCatImg();
  }, []);

  return (
    <div className={styles.container}>
      <h1>CatCard</h1>
      <MyButton onClick={fetchCat} text="new fact" />
      <img className={styles.catImg} src={img} alt="" />
      <p className={styles.catText}>{text}</p>
    </div>
  );
};

export default CatCard;
