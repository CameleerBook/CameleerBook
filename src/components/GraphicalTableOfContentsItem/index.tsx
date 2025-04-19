import { Chapter } from "../../utils/types";
import Icon from "../Icon";
import "./index.css"
import { useNavigate } from "react-router";

function GraphicalTableOfContentsItem(props: { chapter: Chapter }) {
  const chapter = props.chapter
  const name = chapter.name
  const icon = chapter.icon
  const navigate = useNavigate();


  function navigateToChapter(c: Chapter) {
    const url = "/chapter/" + c.number
    navigate(url, { state: { chapter: c } })
  }

  return (
    <div className="gtoc-item" onClick={() => navigateToChapter(chapter)}>
      <Icon icon={icon} />
      <p>{name}</p>
    </div>
  );
}

export default GraphicalTableOfContentsItem;