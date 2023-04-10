export type MovieEntity = {
  id: number
  title: string;
  platform: string;
  genre: string;
  status: string;
  grade?: number;
};

export type Movie = Omit<MovieEntity, "id">;

export type MovieUpdate = Omit<MovieEntity, "title" | "platform" | "genre">;