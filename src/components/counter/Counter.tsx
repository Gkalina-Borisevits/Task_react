import { useEffect, useState } from 'react'
import MyButton from '../myButton/MyButton'

function Counter(): JSX.Element {

    const [counter, setCounter] = useState(0)
    const [age, setAge] = useState(30);

  function handlePlus(): void {
    setCounter(counter + 1)
  }

  function handleMinus(): void {
    setCounter(counter - 1)
  }

  useEffect(() => {
    console.log('1.');
  }, []);

  useEffect(() => {
    console.log('2.');
  });

  useEffect(() => {
    console.log('3. ');
  }, [counter]);

  useEffect(() => {
    console.log('4.');
  }, [age]);


  return (
    <div className='App'>
      <p>Counter</p>
      <div>
        <MyButton text="Minus" onClick={handleMinus} />
        
        <span>{counter}</span>
        <MyButton text="plus" onClick={handlePlus} />
        
        <span>{age}</span>
        <MyButton text="повзрослеть" onClick={() => setAge(age + 1)} />
      </div>
    </div>
  );
};

export default Counter