import { NavigateFunction } from "react-router"
import { Chapter } from "./types"

export function navigateToChapter(c: Chapter, navigate: NavigateFunction) {
  const url = "/chapter/" + c.number
  navigate(url, { state: { chapter: c } })
}

export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export function onClickUrl(url: string) {
  if (url === null) {
    alert("No url available")
  } else {
    openInNewTab(url)
  }
}