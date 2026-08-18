import "./CommentItem.css";

type Props = {
  authorName: string;
  commentText: string;
};

function CommentItem({ authorName, commentText }: Props) {
  return (
    <div className="commentList">
      <p className="authorName">{authorName} さんのコメント:</p>
      <p className="commentText">{commentText}</p>
    </div>
  );
}

export default CommentItem;
