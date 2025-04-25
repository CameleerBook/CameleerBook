import { NavigateFunction } from "react-router"
import { Chapter, Link } from "./types"

export function navigateToChapter(c: Chapter, navigate: NavigateFunction) {
  const url = "/chapter/" + c.number
  navigate(url, { state: { chapter: c } })
}

export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export function onClickUrl(url: string) {
  openInNewTab(url)
}

export function getAboutLinks(links: Link[]) {
  let i = 0
  const len = links.length
  return (
    <div>
      <p>See more at: {
        len === 0 ? <>Currently unavailable</> :
          links.map(e => {
            i += 1
            return (
              <>
                <a href={e.link}>{e.name}</a>{i === links.length ? "" : ", "}
              </>
            )
          })
      }</p>
    </div>
  )
}