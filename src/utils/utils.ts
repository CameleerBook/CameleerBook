import { NavigateFunction } from "react-router"
import { Chapter } from "./types"

export function navigateToChapter(c: Chapter, navigate: NavigateFunction) {
  const url = "/chapter/" + c.number
  navigate(url, { state: { chapter: c } })
}