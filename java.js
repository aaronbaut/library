let library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title}` + ` is by ` + `${this.author},` + ` ${this.pages},` + `${this.read}`
    }
}

function addBookToLibrary(bookObj) {
    return library.push(bookObj)
}

const harry = new Book('Harry', 'JK', '123', 'no')
const bear = new Book('aa', 'bb', 'cc', 'dd')


addBookToLibrary(harry);
addBookToLibrary(bear);
