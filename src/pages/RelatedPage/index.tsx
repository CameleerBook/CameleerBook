import BookItem from "../../components/BookItem";
import PageLayout from "../../components/PageLayout";
import { BOOKS } from "../../utils/constants";
import "./index.css"

function RelatedBody() {
  return (
    <div className="relatedPage-container">
      <h1 className="relatedPage-title">Related Work</h1>
      <div className="relatedPage-listing">
        <>{
          BOOKS.map(e => <BookItem book={e} />)
        }</>
      </div>
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