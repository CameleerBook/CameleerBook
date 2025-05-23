import { Book, Chapter, IntroMessage } from "./types";

export const INTRO_MSG_VERIFICATION: IntroMessage = {
  title: "Why Verification?",
  text: `Software failure can lead to grave consequences in many scenarios. Unit
  testing by itself is insufficient to cover the unimaginable number of possible
  states in any industrial-grade software. We must resort to Formal Verification
  for better reliability guarantees.`
}

export const INTRO_MSG_AUTOMATED: IntroMessage = {
  title: "Why Automated Verification?",
  text: `Proof assistants require highly skilled Verification Engineers, which
  are few in number and take years to train. Automated tools, on the other hand,
  provide a more digestable entry-level and may see more popularity in the
  industry, due to this.`
}

export const INTRO_MSG_ALGORITHMS: IntroMessage = {
  title: "Why Algorithms?",
  text: `We believe that using Algorithms and Data Structures as a learning
  vehicle is a great approach, since our examples are often used in real-world
  software and our readers may be vaguely familiarized with such concepts from
  previous programming experiences.`
}

export const INTRO_MSG_CAMELEER: IntroMessage = {
  title: "Why Cameleer?",
  text: `Cameleer enables the verification of software written in OCaml, a
  beautiful and concise programming language with numeral uses in the industry.
  Cameleer under the hood uses other tools, such as GOSPEL, a very natural
  specification language for OCaml developers, and the powerful Why3 platform.`
}

export const CHAPTERS: Chapter[] = require('../assets/chapters.json');

export const BOOKS: Book[] = require('../assets/books.json');

export const COVER = require("../assets/cover.png")