import "./App.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  return (
    <div className="appBorder">
      <p className="appTitle">カウンターアプリ</p>
      <button onClick={countUp}>+1カウント</button>
      <p>現在の数字：{count}</p>
      {count !== 0 && count % 10 === 0 ? <p>{count}回クリック達成！</p> : null}
    </div>
  );
}

function Calculator() {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleInputPrice(event) {
    setPrice(event.target.value);
  }
  function handleInputQuantity(event) {
    setQuantity(event.target.value);
  }

  const TAX_RATE = 1.1;

  function taxExclusive() {
    return Math.floor(Number(price) * Number(quantity));
  }

  function taxInclusive() {
    return Math.floor(Number(price) * TAX_RATE * Number(quantity));
  }

  return (
    <div className="appBorder">
      <p className="appTitle">計算機</p>
      <p>値段:</p>
      <input
        onChange={handleInputPrice}
        type="number"
        value={price}
        placeholder="値段を入力"
      />
      <p>数量:</p>
      <input
        onChange={handleInputQuantity}
        type="number"
        value={quantity}
        placeholder="数量を入力"
      />

      {price !== "" && quantity !== "" ? (
        <>
          <p>{taxExclusive()}円</p>
          <p>税込{taxInclusive()}円</p>
        </>
      ) : null}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
      <Calculator />
    </div>
  );
}
