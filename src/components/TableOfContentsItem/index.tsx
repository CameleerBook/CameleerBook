import { useLocation, useNavigate } from "react-router";
import { Chapter } from "../../utils/types";
import "./index.css"
import { navigateToChapter } from "../../utils/utils";

function TableOfContentsItem(props: { chapter: Chapter }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const chapter = props.chapter
  const number = chapter.number

  function getStyle(pathname: string, n: number) {
    const aux = pathname.split("/")
    const prefix = "toc-item"
    if (aux[aux.length - 1] === n.toString()) {
      return prefix + " toc-selected"
    }

    return prefix + " toc-notselected"
  }

  const style = getStyle(pathname, number)

  return (
    <div className={style} onClick={() => navigateToChapter(chapter, navigate)}>
      <p>{chapter.name}</p>
    </div>
  )
}

export default TableOfContentsItem;