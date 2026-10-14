type Props = {
  author: string;
  text: string;
};

function CommentItem({ text, author }: Props) {
  return (
    <li>
      <p>
        {text}: {author}
      </p>
    </li>
  );
}

export default CommentItem;
