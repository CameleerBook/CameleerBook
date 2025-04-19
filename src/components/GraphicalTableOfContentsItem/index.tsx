import { Chapter } from "../../utils/types";
import { navigateToChapter } from "../../utils/utils";
import Icon from "../Icon";
import "./index.css"
import { useNavigate } from "react-router";

function GraphicalTableOfContentsItem(props: { chapter: Chapter }) {
  const chapter = props.chapter
  const name = chapter.name
  const icon = chapter.icon
  const navigate = useNavigate();

  return (
    <div className="gtoc-item" onClick={() => navigateToChapter(chapter, navigate)}>
      <Icon icon={icon} />
      <p>{name}</p>
    </div>
  );
}

export default GraphicalTableOfContentsItem;