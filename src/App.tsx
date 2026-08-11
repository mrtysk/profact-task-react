import { useState } from "react";
import { useMemo } from "react";
import "./counterApp.css";
import "./caluculateApp.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  const [priceText, setPriceText] = useState("");
  const [quantityText, setQuantityText] = useState("");

  const taxExcluded = useMemo(() => {
    const result = Number(priceText) * Number(quantityText);
    return result.toFixed(2);
  }, [priceText, quantityText]);

  const taxIncluded = useMemo(() => {
    const result = taxExcluded * 1.1;
    return result.toFixed(2);
  }, [taxExcluded]);

  const clear = () => {
    setPriceText("");
    setQuantityText("");
  };
  return (
    <>
      <div className="counterContainer">
        <p className="p-big">カウンターアプリ</p>

        <button onClick={increment}>ここを押す</button>
        <button onClick={reset}>リセット</button>

        <p>現在の数字: {count}</p>
        {count % 10 === 0 && count > 0 && (
          <p id="achievement">{count} 回クリック達成！</p>
        )}
      </div>

      <div className="calculateContainer">
        <p className="p-big">合計専用計算機</p>
        <p>価格: {priceText} 円</p>
        <input
          type="number"
          value={priceText}
          onChange={(event) => setPriceText(event.target.value)}
          placeholder="価格を入力"
          min="1"
        />

        <p>数量: {quantityText} 個</p>
        <input
          type="number"
          value={quantityText}
          onChange={(event) => setQuantityText(event.target.value)}
          placeholder="数量を入力"
          min="1"
        />

        <button onClick={clear}>クリア</button>
        <div>
          {priceText !== "" && quantityText !== "" && (
            <>
              <p id="taxExcluded">税抜:{taxExcluded}円</p>
              <p id="taxIncluded">税込:{taxIncluded}円</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
