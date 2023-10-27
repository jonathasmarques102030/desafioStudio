export interface Book {
    id: string;
    name: string;
    author: Author;
    cover: string;
    description: string;
    isFavorite: boolean;
    category: string;
  }

export interface Author { 
  id: string;
  name: string;
  picture: string;
  booksCount: number;
  isFavorite: Boolean;
  books: Book[];
}
  
 export type QueryResult = {
    userPicture: String;
    favoriteBooks: Book[];
    favoriteAuthors: Book[]
    allBooks: Book[];
    book: Book
};

  