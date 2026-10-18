import "./App.css";
import CounterButton from "./components/CounterButton";
import CommentItem from "./components/CommentItem";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="appBorder">
      <p className="appTitle">カウンターアプリ</p>
      <p>現在の数字：{count}</p>
      {count !== 0 && count % 10 === 0 ? <p>{count}回クリック達成！</p> : null}
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
  return (
    <div className="appBorder">
      <p className="appTitle">コメントリスト</p>
      <ul>
        {commentData.map((comment) => (
          <CommentItem
            key={comment.id}
            text={comment.text}
            author={comment.author}
          />
        ))}
      </ul>
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
