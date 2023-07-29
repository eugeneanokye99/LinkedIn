export type Post = {
    id: string;
    content: string;
    image?: string;
    likes: number;
}

export type User = {
   id: string;
   name: string;
   position: string;
   image?: string;
}