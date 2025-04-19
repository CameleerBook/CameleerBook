export interface IconType {
  name: string
}

export interface IntroMessage {
  title: string;
  text: string;
}

export interface Proof {
  name: string;
  link: string;
}

export interface Chapter {
  name: string;
  number: number;
  icon: IconType;
  proofs: Proof[]
}