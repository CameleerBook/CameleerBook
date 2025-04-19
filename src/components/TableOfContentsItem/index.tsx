import { Chapter } from "../../utils/types";
import "./index.css"

function TableOfContentsItem(props: { chapter: Chapter }) {
  return (
    <div className="toc-item">
      <p>{props.chapter.name}</p>
    </div>
  )
}

export default TableOfContentsItem;