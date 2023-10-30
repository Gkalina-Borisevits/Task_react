import React, { FC, useState } from 'react';
import styles from './Sandwich.module.css'; 


const Sandwich: FC = () => {
  const [sandwich, setSandwich] = useState<string>('Бутерброд:');

  function handleAddBread(): void {
    setSandwich(`${sandwich} хлеб`);
  }

  function handleAddCheese(): void {
    setSandwich(`${sandwich} сыр`);
  }

  function handleAddKolbasa(): void {
    setSandwich(`${sandwich} колбаса`);
  }

  function handleClear(): void {
    setSandwich('Бутерброд:'); 
  }

  return (
    <div className='App'>
      <h1>Sandwich</h1>
      <p className={styles.sandwich}>{sandwich}</p>
      
      <button className={styles.btn} type='button' onClick={handleAddBread}>Добавить хлеб</button>
      <button className={styles.btn} type='button' onClick={handleAddCheese}>Добавить сыр</button>
      <button className={styles.btn} type='button' onClick={handleAddKolbasa}>Добавить колбасу</button>
      <button className={styles.btn} type='button' onClick={handleClear}>Готовить заново!</button>
    </div>
  );
};

export default Sandwich;









