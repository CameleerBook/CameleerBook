import { Chapter } from "../../utils/types";
import Icon from "../Icon";
import "./index.css"


function GraphicalTableOfContentsItem(props: { chapter: Chapter }) {
  return (
    <div className="gtoc-item">
      <Icon icon={props.chapter.icon} />
      <p>{props.chapter.name}</p>
    </div>
  );
}

export default GraphicalTableOfContentsItem;