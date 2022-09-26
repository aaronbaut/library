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
// Create DOM for books and remove button to appear on page
let i=0;
library.forEach(books => {
    console.log(books)
    const card = document.createElement('div')
    const remove = document.createElement('button')
    remove.classList.add('remove')
    card.classList.add('card')
    remove.setAttribute('data-category', i)
    card.textContent = `${books.title}`
    card.textContent += `${books.author}`
    container.appendChild(card)
    remove.textContent = 'Remove'
    container.appendChild(remove)
    i++
    }
)


//Display add book form when Add book button is selected
const bookForm = document.querySelector('.addBook')
const newBook = document.querySelector('.new')
newBook.addEventListener('click', () => {
    console.log('hi')
    bookForm.style.display='block';

    }
)

const removeBook = document.querySelectorAll('[data-category]')
// Try to target dataset value
removeBook.forEach((booky) => {
    booky.addEventListener('click', (e) => {
    console.log(e.target.dataset.category)
    library.splice(e.target.dataset.category, 1);
    })
})

