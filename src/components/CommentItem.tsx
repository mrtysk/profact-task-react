type Props = {
  author: string;
  text: string;
};
function CommentItem({ author, text }: Props) {
  return (
    <li>
      {author}: {text}
    </li>
  );
}

export default CommentItem;
