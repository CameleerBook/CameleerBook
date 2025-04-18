import { CHAPTERS } from "../../utils/constants";
import GraphicalTableOfContentsItem from "../GraphicalTableOfContentsItem";
import "./index.css"

function GraphicalTableOfContents() {
  return (
    <div className="gtoc-container">
      <div className="gtoc-title">Table of Contents</div>
      <div className="gtoc-body">{
        CHAPTERS.map(e => <GraphicalTableOfContentsItem chapter={e} />)
      }</div>
    </div>
  );
}

export default GraphicalTableOfContents;