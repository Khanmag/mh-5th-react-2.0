import { useState } from "react";

const Counter = () => {
  // useState - хук -это функция, которая работает только внутри компонента
  // useState - возвращает массив из 2х элементов - значение и функцию изменяющую это значение
  const [countValue, setCountValue] = useState(0);
  return (
    <div>
      {/* <button onClick={() => setCountValue(countValue - 1)}>-</button> */}
      <button onClick={() => setCountValue((prev) => prev - 1)}>-</button>
      {/* <button onClick={() => setCountValue(7)}>-</button> */}
      <span>{countValue}</span>
      {/* <span>countValue</span> */}
      {/* <button onClick={() => setCountValue(countValue + 1)}>+</button> */}
      <button onClick={() => setCountValue((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Counter;
