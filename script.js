//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {}

//Add book to list
UI.prototype.addBookToList = (book) => {
    const list = document.querySelector('#book-list');

    //Create the tr element
    const row = document.createElement('tr');
    row.innerHTML = 
    `  
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">X</a></td>
    `;

    list.appendChild(row);

}

//Clear Fields
UI.prototype.clearFileds = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';

}

//Error alert
UI.prototype.showAlert = (message, className) => {
    //create div
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    //set timeout after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
};

//Event listeners
document.getElementById('book-form').addEventListener('submit', (e) => {
    //Prevent default form submit
    e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Instantiate a new book
    const book = new Book(title, author, isbn);

    //Instantiate new UI 
    const ui = new UI();

    //Validation for the form
    if( title === '' || author === '' || isbn === '') {
        //Error alert
        ui.showAlert('Please fill in all classes', 'error');
    } else {
        //Add book to list
        ui.addBookToList(book);

        //show success
        ui.showAlert('Book added!', 'success');
        //Clear fields
        ui.clearFileds();
    }


});