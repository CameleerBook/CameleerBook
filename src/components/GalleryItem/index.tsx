import { Chapter } from "../../utils/types";
import ProofItem from "../ProofItem";

function GalleryItem(props: { chapter: Chapter }) {
  const chapter = props.chapter
  return (
    <div>
      <div>
        <h3>{chapter.name}</h3>
      </div>
      <div>
        <>{chapter.proofs.map(e => <ProofItem proof={e} />)}</>
      </div>
    </div>
  )
}

export default GalleryItem;