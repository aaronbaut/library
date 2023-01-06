let library = [];
// Object constructor
// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.info = () => {
//         return `${this.title}` + ` is by ` + `${this.author},` + ` ${this.pages},` + `${this.read}`
//     }
// }
//Refactor constructors into Class
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info() {
        return `${this.title}` + ` is by ` + `${this.author},` + ` ${this.pages},` + `${this.read}`
    }
}
// Function to push books into library array
function addBookToLibrary(bookObj) {
    return library.push(bookObj)
}
//Book placeholders
const harry = new Book('Harry Potter', 'JK Rowling', '1234', 'no')
const bear = new Book('City in the Sun', 'Gabriel Torres', '231', 'yes')
const goggins = new Book('Can\'t Hurt Me', 'David Goggins', '200', 'no')

// Placing books into array for testing
addBookToLibrary(harry);
addBookToLibrary(bear);
addBookToLibrary(goggins);

const container = document.querySelector('.container')
// Create DOM for books
let i=0;
library.forEach(books => {
    console.log(books)
    const card = document.createElement('table')
    card.classList.add('card')
    card.setAttribute('data-category', i)
    const tRow = document.createElement('tr') 
    const title = document.createElement('th')
    const author = document.createElement('th')
    const pages = document.createElement('th')
    const read = document.createElement('th')
    const switchRead = document.createElement('th')
    const tRow2 = document.createElement('tr')
    const bTitle = document.createElement('td')
    const bAuthor = document.createElement('td')
    const bPages = document.createElement('td')
    const bRead = document.createElement('td')
    const toggle = document.createElement('td')
    bRead.classList.add('bRead')
    bRead.setAttribute('data-read', i)
    title.textContent = 'Book'
    author.textContent = 'Author'
    pages.textContent = 'Pages'
    read.textContent = 'Read Y/N'
    switchRead.textContent = ' '
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(read)
    card.appendChild(switchRead)
    card.appendChild(tRow)
    bTitle.textContent = books.title
    bAuthor.textContent = books.author
    bPages.textContent = books.pages
    bRead.textContent = books.read
    const togButton = document.createElement('button')
    togButton.textContent = 'toggle'
    togButton.classList.add('toggle')
    togButton.setAttribute('data-toggle', i)
    card.appendChild(bTitle)
    card.appendChild(bAuthor)
    card.appendChild(bPages)
    card.appendChild(bRead)
    card.appendChild(toggle)
    toggle.appendChild(togButton)
    card.appendChild(tRow2)
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
// Target Remove button and delete book if remove button is pressed
removeBook.forEach((booky) => {
    const buttonRem = document.querySelector('.removeButton')
    booky.addEventListener('click', (e) => {
    if (e.target.innerText ==='Remove') {
        library.splice(e.target.dataset.category, 1);
        booky.remove();
        }
    })
})



const bRead = document.querySelectorAll('.bRead')
// create separate function for changing bRead text

function change(e) {
    bRead.forEach(text => {
        if (e.target.dataset.toggle == text.dataset.read && library[e.target.dataset.toggle].read === 'no') {
            library[e.target.dataset.toggle].read = 'yes'
            return text.textContent = 'yes'
        } else if (e.target.dataset.toggle == text.dataset.read && library[e.target.dataset.toggle].read === 'yes') {
            library[e.target.dataset.toggle].read = 'no'
            return text.textContent ='no'
        }
    })
}
// Target library array and toggleButton and change book.read status when toggled
const toggleButton = document.querySelectorAll('.toggle')
toggleButton.forEach(tog => {
     tog.addEventListener('click', (e) => {
        change(e);
 })
})



