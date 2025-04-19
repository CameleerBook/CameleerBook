import { Chapter, IntroMessage } from "./types";

const INTRO_MSG_CONTEXT: IntroMessage = {
  title: "Context",
  text: `Apprendre la vérification avec Cameleer is a textbook for learning 
  Formal Verification of software through the use of automated deductive tools, 
  such as Cameleer, Why3 and SMT solvers. Formal Verification is a field of 
  Computer Science concerned with the proving the soundness of the reasoning and
  implementation of a piece of software, through the use of logical statements 
  and mathematical properties.`
}

const INTRO_MSG_MOTIVATION: IntroMessage = {
  title: "Motivation",
  text: `In various contexts software failure can lead to undesired and serious 
  consequences, for instance endangering human lives. Verifying of software 
  correctness through unit testing is unreliable and insufficient, as any 
  industrial-grade software has an unimaginable number of possible states. 
  Instead, we must rely on Formal Verification, and although not an easy 
  endeavour, this can be facilitated to an extent with automated deductive 
  tools.`
}

const INTRO_MSG_OVERVIEW: IntroMessage = {
  title: "Overview",
  text: `"Apprendre la vérification avec Cameleer" uses classical algorithms and 
  data structures as a vehicle to teach about Formal Verification. By using 
  well-known algorithms, we believe most readers will be vaguely familiarized 
  with the problem or, at the very least, can be easily searched on other 
  sources of information. In this book we use Cameleer, Why3 and a few SMT 
  solvers as our primary tools, as we want to provide the next generation of
  Verification Engineer with both practical and theoretical knowledge.`
}

export const INTRO_MSG_LIST: IntroMessage[] = [
  INTRO_MSG_CONTEXT, INTRO_MSG_MOTIVATION, INTRO_MSG_OVERVIEW
]

const CHAPTER_1: Chapter = {
  name: "I. Installation Procedures",
  number: 1,
  icon: { name: "download" },
  proofs: []
}
const CHAPTER_2: Chapter = {
  name: "II. Programming with OCaml",
  number: 2,
  icon: { name: "terminal" },
  proofs: []
}
const CHAPTER_3: Chapter = {
  name: "III. Introduction to Cameleer",
  number: 3,
  icon: { name: "verified_user" },
  proofs: []
}
const CHAPTER_4: Chapter = {
  name: "IV. Mathematical Problems",
  number: 4,
  icon: { name: "functions" },
  proofs: []
}
const CHAPTER_5: Chapter = {
  name: "V. Sorting Algorithms",
  number: 5,
  icon: { name: "sort" },
  proofs: []
}
const CHAPTER_6: Chapter = {
  name: "VI. Searching Algorithms",
  number: 6,
  icon: { name: "search" },
  proofs: []
}
const CHAPTER_7: Chapter = {
  name: "VII. Data Structures",
  number: 7,
  icon: { name: "data_array" },
  proofs: []
}
const CHAPTER_8: Chapter = {
  name: "VIII. Graph Algorithms",
  number: 8,
  icon: { name: "hub" },
  proofs: []
}
const CHAPTER_9: Chapter = {
  name: "IX. Selected Topics",
  number: 9,
  icon: { name: "extension" },
  proofs: []
}

export const CHAPTERS: Chapter[] = [
  CHAPTER_1, CHAPTER_2, CHAPTER_3,
  CHAPTER_4, CHAPTER_5, CHAPTER_6,
  CHAPTER_7, CHAPTER_8, CHAPTER_9,
]