import { useState } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";
import CommentItem from "./components/CommentItem";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="appContainer">
      <p>カウンターアプリ</p>
      <CounterButton label="カウントを増やす" onClick={incrementCount} />
      <p>現在の数字: {count}</p>
      {count % 10 === 0 && count > 0 && (
        <p>
          <strong>{count} 回クリック達成！</strong>
        </p>
      )}{" "}
      <div className="commentSection">
        <CommentList />
      </div>
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
    <div>
      <p>コメントリスト</p>

      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          authorName={comment.author}
          commentText={comment.text}
        />
      ))}
    </div>
  );
}

export default App;
