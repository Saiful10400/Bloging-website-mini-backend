export interface Tpost {
  id: string;
  title: string;
  description: string;
  author: string;
  image: string;
  createdAt: Date;
  updatedAt?: Date;
  tags?: string[];
}

export default Tpost