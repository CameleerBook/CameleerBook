import { Book } from "../../utils/types";
import { getAboutLinks } from "../../utils/utils";
import "./index.css"

function BookItem(props: { book: Book }) {
  const book = props.book

  return (
    <div className="bookItem-container">
      <p className="bookItem-title">{book.title}</p>
      <p>{book.description}</p>
      <p>{book.authors}</p>
      <>{getAboutLinks(book.links)}</>
    </div>
  );
}

export default BookItem;