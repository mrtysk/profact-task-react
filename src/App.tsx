import { useState } from "react";
import CounterButton from "./components/CounterButton";
import CommentItem from "./components/CommentItem";

function Counter() {
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

function CommentList() {
  const comments = [
    { id: 1, author: "Alice", text: "素晴らしい記事です！" },
    { id: 2, author: "Bob", text: "面白かったです！！！" },
    { id: 3, author: "Noah", text: "楽しく読ませていただきました。" },
    { id: 4, author: "Alice", text: "ためになる！" },
    { id: 5, author: "Bob", text: "興味深い。" },
  ];
  return (
    <div className="appContainer">
      <p className="appTitle">コメントリスト</p>
      <ul>
        {comments.map((comment, index) => (
          <CommentItem
            key={index}
            author={comment.author}
            text={comment.text}
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
