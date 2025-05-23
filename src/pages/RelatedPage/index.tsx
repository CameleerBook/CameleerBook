import BookItem from "../../components/BookItem";
import PageBodyLayout from "../../components/PageBodyLayout";
import PageLayout from "../../components/PageLayout";
import { BOOKS } from "../../utils/constants";
import "./index.css"

function RelatedListing() {
  return (
    <div className="relatedPage-listing">
      <>{
        BOOKS.map(e => <BookItem book={e} />)
      }</>
    </div>
  )
}

function RelatedBody() {
  return (
    <>
      <PageBodyLayout title="Related Work" body={<RelatedListing />} />
    </>
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