import { Chapter } from "../../utils/types";
import Icon from "../Icon";
import "./index.css"
import { useNavigate } from "react-router";

function GraphicalTableOfContentsItem(props: { chapter: Chapter }) {
  const chapter = props.chapter
  const name = chapter.name
  const number = chapter.number
  const icon = chapter.icon
  const navigate = useNavigate();


  function navigateToChapter(n: number) {
    const url = "/chapter/" + n
    navigate(url)
  }

  return (
    <div className="gtoc-item" onClick={() => navigateToChapter(number)}>
      <Icon icon={icon} />
      <p>{name}</p>
    </div>
  );
}

export default GraphicalTableOfContentsItem;