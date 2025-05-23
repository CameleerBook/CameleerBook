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

/*const INTRO_MSG_CONTEXT: IntroMessage = {
  title: "Context",
  text: `Apprendre la vérification avec Cameleer is a textbook for learning 
  Formal Verification of software through the use of automated deductive tools, 
  such as Cameleer, Why3 and SMT solvers. Formal Verification is a field of 
  Computer Science concerned with proving the soundness of the reasoning and
  implementation of a piece of software with logical statements and mathematical 
  properties.`
}

const INTRO_MSG_MOTIVATION: IntroMessage = {
  title: "Motivation",
  text: `In various contexts, software failure can lead to undesired and serious 
  consequences, for instance endangering human lives. Unit testing by itself is 
  unreliable and insufficient, as any industrial-grade software has an 
  unimaginable number of possible states. Instead, we must rely on Formal 
  Verification, and although not an easy endeavour, this can be facilitated to 
  an extent with automated deductive tools.`
}

const INTRO_MSG_OVERVIEW: IntroMessage = {
  title: "Overview",
  text: `"Apprendre la vérification avec Cameleer" uses classical algorithms and 
  data structures as a vehicle to teach about Formal Verification. We believe 
  most readers will be vaguely familiarized with the set of well-known algorithms 
  present in the book, or at the very least, may easily find information on other 
  sources and learning materials. In this book we use Cameleer, Why3 and a few SMT 
  solvers as our primary tools, as we want to provide the next generation of
  Verification Engineer with both practical and theoretical knowledge.`
}*/

/*export const INTRO_MSG_LIST: IntroMessage[] = [
  INTRO_MSG_CONTEXT, INTRO_MSG_MOTIVATION, INTRO_MSG_OVERVIEW
]*/

export const CHAPTERS: Chapter[] = require('../assets/chapters.json');

export const BOOKS: Book[] = require('../assets/books.json')