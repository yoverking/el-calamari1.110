export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
