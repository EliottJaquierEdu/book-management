import Book from "../models/Book.ts";

export default class BooksService {
    static async getBooks():Promise<Book[]> {
        const response = await fetch('src/assets/books.json');
        return await response.json();
    }

    public static getBookStatusColor(book: Book): string {
        switch (book.status) {
            case "Réservable":
                return "green";
            case "Disponible":
                return "orange";
            case "En transit":
                return "orange";
            case "Plus en stock":
                return "red";
            default:
                return "red";
        }
    }
    public static getBookStatusAction(book: Book): string {
        switch (book.status) {
            case "Réservable":
                return "Réserver";
            case "Disponible":
                return "En magasin uniquement";
            case "En transit":
                return "Momentanément indisponible";
            case "Plus en stock":
                return "Plus en stock";
            default:
                return "Indisponible";
        }
    }

    public static reserveBook(book: Book) {
        //TODO : Cosa
    }
}