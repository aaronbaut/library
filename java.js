let library = [];
// Object constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title}` + ` is by ` + `${this.author},` + ` ${this.pages},` + `${this.read}`
    }
}
// Function to push books into library array
function addBookToLibrary(bookObj) {
    return library.push(bookObj)
}

const harry = new Book('Harry', 'JK', '123', 'no')
const bear = new Book('aa', 'bb', 'cc', 'dd')
const goggins = new Book('Hurt', 'Goggins', '200', 'no')

// Placing books into array for testing
addBookToLibrary(harry);
addBookToLibrary(bear);
addBookToLibrary(goggins);

const container = document.querySelector('.container')
// Create DOM for books
let i=0;
library.forEach(books => {
    console.log(books)
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-category', i)
    const table = document.createElement('table')
    const tRow = document.createElement('tr') 
    const title = document.createElement('th')
    const author = document.createElement('th')
    const pages = document.createElement('th')
    const read = document.createElement('th')
    const tRow2 = document.createElement('tr')
    const bTitle = document.createElement('td')
    const bAuthor = document.createElement('td')
    const bPages = document.createElement('td')
    const bRead = document.createElement('td')
    title.textContent = this.title;
    card.appendChild(title)

    container.appendChild(card)
    i++
    }
)
// Create DOM for remove button within card
const card = document.querySelectorAll('.card')
    card.forEach(remButton => {
    const remove = document.createElement('button')
    remove.classList.add('removeButton')
    remove.setAttribute
    remove.textContent ='Remove'
    remButton.appendChild(remove)
})


//Display add book form when Add book button is selected
const bookForm = document.querySelector('.addBook')
const newBook = document.querySelector('.new')
newBook.addEventListener('click', () => {
    console.log('hi')
    bookForm.style.display='block';

    }
)

const removeBook = document.querySelectorAll('[data-category]')
// Try to target dataset value and remove books from array
removeBook.forEach((booky) => {
    booky.addEventListener('click', (e) => {
    library.splice(e.target.dataset.category, 1);
    booky.remove();
    })
})

