export default class Book {
    title: string;
    author: string;
    status: string;
    date: string;
    editor: string;
    pages: number;
    language: string;
    genres: string[];
    link: string;
    image: string;
    synopsis: string;
    description: string;
    constructor(title: string, author: string, status: string, date: string, editor: string, pages: number, language: string, genres: string[], link: string, image: string, synopsis: string, description: string) {
        this.title = title;
        this.author = author;
        this.status = status;
        this.date = date;
        this.editor = editor;
        this.pages = pages;
        this.language = language;
        this.genres = genres;
        this.link = link;
        this.image = image;
        this.synopsis = synopsis;
        this.description = description;
    }
}