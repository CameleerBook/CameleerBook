import { Book, Chapter, IntroMessage } from "./types";

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

export const CHAPTERS: Chapter[] = require('../assets/chapters.json');

export const BOOKS: Book[] = require('../assets/books.json')