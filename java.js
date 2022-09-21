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
const goggins = new Book('Hurt', 'Goggins', '200', 'no')


addBookToLibrary(harry);
addBookToLibrary(bear);
addBookToLibrary(goggins);

const container = document.querySelector('.container')

let i=0;
library.forEach(books => {
    console.log(books)
    const card = document.createElement('div')
    const remove = document.createElement('button')
    remove.classList.add('remove')
    card.classList.add('card')
    card.setAttribute('dataset', i)
    card.textContent = `${books.title}`
    card.textContent += `${books.author}`
    container.appendChild(card)
    remove.textContent = 'Remove'
    container.appendChild(remove)
    i++
    }
)



const bookForm = document.querySelector('.addBook')

const newBook = document.querySelector('.new')
newBook.addEventListener('click', () => {
    console.log('hi')
    bookForm.style.display='block';

}
)