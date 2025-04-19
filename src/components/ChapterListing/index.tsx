import { Chapter } from "../../utils/types";
import ProofItem from "../ProofItem";
import "./index.css"

function ChapterListing(props: { chapter: Chapter }) {
  const chapter = props.chapter
  const name = chapter.name
  const proofs = chapter.proofs

  return (
    <div className="chapterListing-container">
      <div className="chapterListing-title">
        <p>{name}</p>
      </div>
      <div className="chapterListing-body">{
        proofs.map(e => <ProofItem proof={e} />)
      }</div>
    </div>
  )
}

export default ChapterListing;