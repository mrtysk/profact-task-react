import { useState } from "react";
import CounterButton from "./components/CounterButton";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="appContainer">
      <p className="appTitle">カウンターアプリ</p>
      <CounterButton buttonLabel="クリック" onClick={incrementCount} />
      <p>現在のカウント：{count}</p>
      {count % 10 === 0 && count !== 0 && (
        <p className="strongPoint">{count}回クリック達成！</p>
      )}
    </div>
  );
}

export default App;
