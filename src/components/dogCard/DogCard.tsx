import React, { FC, useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import styles from "./DogCard.module.css";

const DogCard: FC = () => {
  // есть переменная в которой мы храним данные
  const [img, setImg] = useState("");
  //хук useEffect срабатывает один раз при пустом массиве зависимостей
  //в нем работаем с ассинхронным вызовом fetch

  function fetchDog(): void {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImg(data.message));
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className={styles.container}>
      <h1>DogCard</h1>
      <MyButton onClick={fetchDog} text="обновить пса" />
      <img className={styles.dogImg} src={img} alt="dog" />
    </div>
  );
};

export default DogCard;
