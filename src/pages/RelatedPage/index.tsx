import BookItem from "../../components/BookItem";
import PageLayout from "../../components/PageLayout";
import "./index.css"

function RelatedBody() {
  return (
    <div className="relatedPage-container">
      <BookItem />
      <BookItem />
      <BookItem />

      <BookItem />
      <BookItem />
      <BookItem />

      <BookItem />
      <BookItem />
      <BookItem />
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