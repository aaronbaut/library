let library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.book}` + `by` + `${this.author},` + `${this.pages},` + `` 
    }
}

function addBookToLibrary() {
    
}