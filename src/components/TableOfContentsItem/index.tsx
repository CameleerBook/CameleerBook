import { Chapter } from "../../utils/types";

function TableOfContentsItem(props: { chapter: Chapter }) {
  return (
    <div className="toc-item">
      <p>{props.chapter.name}</p>
    </div>
  )
}

export default TableOfContentsItem;