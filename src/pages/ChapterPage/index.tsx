import PageLayout from "../../components/PageLayout";
import TableOfContents from "../../components/TableOfContents";

function ChapterBody() {
  return (
    <div className="chapterBody-container">
      <TableOfContents />
      <></>
    </div>
  )
}

function ChapterPage() {
  return (
    <>
      <PageLayout body={<ChapterBody />} />
    </>
  );
}

export default ChapterPage;