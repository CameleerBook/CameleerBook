import { useNavigate } from "react-router";
import { Chapter } from "../../utils/types";
import "./index.css"
import { navigateToChapter } from "../../utils/utils";

function TableOfContentsItem(props: { chapter: Chapter }) {
  const navigate = useNavigate();
  const chapter = props.chapter

  return (
    <div className="toc-item" onClick={() => navigateToChapter(chapter, navigate)}>
      <p>{chapter.name}</p>
    </div>
  )
}

export default TableOfContentsItem;