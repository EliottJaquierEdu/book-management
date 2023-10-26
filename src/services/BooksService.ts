import Book from "../models/Book.ts";

export default class BooksService {
    async getBooks():Promise<Book[]> {
        const response = await fetch('src/assets/books.json');
        return await response.json();
    }
}