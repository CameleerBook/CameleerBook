export interface IconType {
  name: String
}

export interface IntroMessage {
  title: String;
  text: String;
}

export interface Proof {
  name: String;
  link: String;
}

export interface Chapter {
  name: String;
  number: number;
  icon: IconType;
  proofs: Proof[]
}