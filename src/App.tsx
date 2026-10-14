import "./App.css";
import CounterButton from "./components/CounterButton";
import CommentItem from "./components/CommentItem";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  return (
    <div className="appBorder">
      <p className="appTitle">カウンターアプリ</p>
      <p>現在の数字：{count}</p>
      {count !== 0 && count % 10 === 0 ? <p>{count}回クリック達成！</p> : ""}
      <CounterButton label="+1カウント" onClick={countUp} />
    </div>
  );
}

const commentData = [
  { id: 1, author: "Alice", text: "素晴らしい記事です！" },
  { id: 2, author: "Bob", text: "面白かったです！！！" },
  { id: 3, author: "Noah", text: "楽しく読ませていただきました。" },
  { id: 4, author: "Alice", text: "ためになる！" },
  { id: 5, author: "Bob", text: "興味深い。" },
];

function CommentList() {
  const pickedData = [];
  for (let i = 0; i < commentData.length; i++) {
    pickedData.push(
      <CommentItem
        key={commentData[i].id}
        text={commentData[i].text}
        author={commentData[i].author}
      />,
    );
  }
  return (
    <div className="appBorder">
      <p className="appTitle">コメントリスト</p>
      <ul>{pickedData}</ul>
    </div>
  );
}
export default function App() {
  return (
    <>
      <Counter />
      <CommentList />
    </>
  );
}
