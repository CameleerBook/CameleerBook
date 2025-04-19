import { useLocation } from "react-router";
import ChapterListing from "../../components/ChapterListing";
import PageLayout from "../../components/PageLayout";
import TableOfContents from "../../components/TableOfContents";
import "./index.css"

function ChapterBody() {
  const { state } = useLocation()
  console.log("State: " + state)

  return (
    <div className="chapterBody-container">
      <TableOfContents />
      <ChapterListing chapter={state.chapter} />
    </div>
  )
}

/*
      <TableOfContents />
      <ChapterListing chapter={state.chapter} />
*/

function ChapterPage() {
  return (
    <>
      <PageLayout body={<ChapterBody />} />
    </>
  );
}

export default ChapterPage;