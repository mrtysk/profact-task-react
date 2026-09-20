import { useState } from "react";

// シンプルなカウンターアプリを作ろう

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  if (count % 10 === 0 && count !== 0) {
    return (
      <div className="appContainer">
        <p className="appTitle">カウンターアプリ</p>
        <button onClick={handleClick}>クリック</button>
        <p>現在のカウント：{count}</p>
        <p className="strongPoint">{count}回クリック達成！</p>
      </div>
    );
  } else {
    return (
      <div className="appContainer">
        <p className="appTitle">カウンターアプリ</p>
        <button onClick={handleClick}>クリック</button>
        <p>現在のカウント：{count}</p>
      </div>
    );
  }
}

// 商品価格の計算機を作ろう

function Calculator() {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  //   const handlePrice = (event) => {
  //     setPrice(event.target.value);
  //   };

  //   const handleQuantity = (event) => {
  //     setQuantity(event.target.value);
  //   };

  const withoutTax = () => {
    return Number(price) * Number(quantity);
  };

  const addTax = () => {
    return withoutTax() * 0.1;
  };
  const withTax = () => {
    return withoutTax() + addTax();
  };

  if (1 <= Number(price) && 1 <= Number(quantity)) {
    return (
      <div className="appContainer">
        <p className="appTitle">商品価格の計算機</p>
        <div>
          <p>値段:</p>
          <input
            type="number"
            value={price}
            // onChange={handlePrice}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="価格を入力"
          />
        </div>
        <div>
          <p>数量:</p>
          <input
            type="number"
            value={quantity}
            // onChange={handleQuantity}
            onChange={(event) => setQuantity(event.target.value)}
            placeholder="数量を入力"
          />
        </div>
        <div>
          <p>{withoutTax()}円</p>
          <p className="strongPoint">税込:{withTax()}円</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="appContainer">
        <p className="appTitle">商品価格の計算機</p>
        <div>
          <p>値段:</p>
          <input
            type="number"
            value={price}
            // onChange={handlePrice}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="価格を入力"
          />
        </div>
        <div>
          <p>数量:</p>
          <input
            type="number"
            value={quantity}
            // onChange={handleQuantity}
            onChange={(event) => setQuantity(event.target.value)}
            placeholder="数量を入力"
          />
        </div>
        <div>
          <p>円</p>
          <p>税込:円</p>
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <>
      <div>
        <Counter />
      </div>
      <div>
        <Calculator />
      </div>
    </>
  );
}
