import { Book } from "../../utils/types";
import { onClickUrl } from "../../utils/utils";
import "./index.css"

function BookItem(props: { book: Book }) {
  const book = props.book
  const url = book.link

  return (
    <div className="bookItem-container" onClick={() => onClickUrl(url)}>
      <div className="bookItem-title">
        <p>{book.title}</p>
      </div>
      <div className="bookItem-body">
        <p>{"Authors: " + book.authors}</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookItem;