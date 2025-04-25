import BookItem from "../../components/BookItem";
import PageLayout from "../../components/PageLayout";
import { BOOKS } from "../../utils/constants";
import "./index.css"

function RelatedBody() {
  return (
    <div className="relatedPage-container">
      <>{
        BOOKS.map(e => <BookItem book={e} />)
      }</>
    </div>
  )
}

function RelatedPage() {
  return (
    <>
      <PageLayout body={<RelatedBody />} />
    </>
  );
}

export default RelatedPage;