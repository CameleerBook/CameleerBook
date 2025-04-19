import { CHAPTERS } from "../../utils/constants";
import TableOfContentsItem from "../TableOfContentsItem";
import "./index.css"

function TableOfContents() {
  return (
    <div className="toc-container">
      <div className="toc-title">
        <p>Table of Contents</p>
      </div>
      <>{
        CHAPTERS.map(e => <TableOfContentsItem chapter={e} />)
      }</>
    </div>
  );
}

export default TableOfContents;