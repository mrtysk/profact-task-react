function CommentItem() {
  const comments = [
    { id: 1, author: "Alice", text: "素晴らしい記事です！" },
    { id: 2, author: "Bob", text: "面白かったです！！！" },
    { id: 3, author: "Noah", text: "楽しく読ませていただきました。" },
    { id: 4, author: "Alice", text: "ためになる！" },
    { id: 5, author: "Bob", text: "興味深い。" },
  ];

  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          {comment.author}: {comment.text}
        </li>
      ))}
    </ul>
  );
}

export default CommentItem;
