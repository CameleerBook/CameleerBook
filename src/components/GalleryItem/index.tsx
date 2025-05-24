import { Chapter } from "../../utils/types";
import ProofItem from "../ProofItem";
import "./index.css"

function GalleryItem(props: { chapter: Chapter }) {
  const chapter = props.chapter
  return (
    <div className="galleryItem-container">
      <div className="galleryItem-title">
        <h2>{chapter.name}</h2>
      </div>
      <div className="galleryItem-listing">
        <>{chapter.proofs.map(e => <ProofItem proof={e} />)}</>
      </div>
    </div>
  )
}

export default GalleryItem;