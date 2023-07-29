export type Post = {
  id: string;
  content: string;
  image?: string;
  likes: number;
  author: {
    name: string;
    position: string;
    id: string;
    image: string;
  };
};

export type User = {
  id: string;
  name: string;
  about: string;
  position: string;
  image?: string;
  backImage?: string;
  experience?: Experience[]
};

export type Experience = {
    id: string;
    title: string;
    companyName: string;
    companyImage?: string;
}
