
const myLibrary = [];

const storedLibrary = JSON.parse(localStorage.getItem("myLibrary"));
if (storedLibrary) {
  storedLibrary.forEach(book => myLibrary.push(book));
  displayBooks();
}






function Book(title, author, pages, read){
  // Generate a new UUID (fallback to timestamp+random if unavailable)
  this.id = (window.crypto && window.crypto.randomUUID)
    ? window.crypto.randomUUID()
    : Date.now().toString(36) + Math.random().toString(36).slice(2);
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const validTargets = ["book-form"];
const target = window.location.hash.slice(1); // remove '#'
if (validTargets.includes(target)) {
  showForm(target);
}
function showForm(idToShow){
    const sections = ['add-book']; 

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = (id === idToShow) ? 'block' : 'none';
    }
  });
}

function addBook(event) {
    event.preventDefault();
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    // validation
    const uppertitle = title.toUpperCase();
    const upperauthor = author.toUpperCase();

    if(uppertitle.length < 5 || uppertitle.length > 70){
        alert("Book's Title must be between five and fifty characters.");
        return;
    } else if (upperauthor.length < 5 || upperauthor.length > 20) {
        alert("Author's name must be between five and twenty characters.");
   } else {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBooks();
    document.getElementById("book-form").reset();
    const dialog = document.getElementById("confirmation-dialog");
    dialog.showModal();
    // Save to localStorage
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

    // Reset form
    document.getElementById("book-form").reset();

    // Hide the form
  // Don't hide the form immediately after showing the modal —
  // hiding the parent of an open <dialog> can make the dialog invisible but still modal,
  // blocking UI interactions. We'll hide the form when the confirmation dialog is closed.

        
}
}
function displayBooks() {
  const booklist = document.getElementById("library");
  booklist.innerHTML = ""; // Clear old content

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.setAttribute("data-id", book.id); // Set data-id attribute
    card.innerHTML = `
      <h3>Title:${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? "Read" : "Not Read"}</p>
      <button class="toggle-read">${book.read ? "Mark as Unread" : "Mark as Read"}</button>
      <button class="remove-book">Remove</button>
    `;
    booklist.appendChild(card);
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-book")) {
    const bookId = e.target.parentElement.getAttribute("data-id");
    removeBook(bookId);
  }

  if (e.target.classList.contains("toggle-read")) {
    const bookId = e.target.parentElement.getAttribute("data-id");
    toggleRead(bookId);
  }
});

function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
        // inside removeBook()
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));



  }
}

function toggleRead(id) {
  const book = myLibrary.find(book => book.id === id);
  if (book) {
    book.read = !book.read;
        // inside toggleRead()
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    displayBooks();
  }
}






// Close dialog
document.getElementById("close-dialog").addEventListener("click", () => {
  document.getElementById("confirmation-dialog").close();
  // Also hide the add-book form when the user closes the confirmation dialog
  const addBookSection = document.getElementById("add-book");
  if (addBookSection) addBookSection.style.display = "none";
});

// Make the dialog behavior robust: when the dialog closes for any reason,
// ensure the add-book form is hidden and focus returns to the Add Book button.
const confirmationDialog = document.getElementById("confirmation-dialog");
if (confirmationDialog) {
  confirmationDialog.addEventListener('close', () => {
    const addBookSection = document.getElementById('add-book');
    if (addBookSection) addBookSection.style.display = 'none';
    // Try to focus the Add Book button (search by the inline onclick used in HTML)
    const openBtn = document.querySelector("button[onclick=\"showForm('add-book')\"]");
    if (openBtn) {
      try { openBtn.focus(); } catch (e) { /* ignore focus errors */ }
    }
  });
}

// close form
document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("add-book").style.display = "none";
});

// Display current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();


// Reset Budget
document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset your library? This action cannot be undone.")) {
        localStorage.removeItem("myLibrary");
        myLibrary = [];
        displayBooks();
    }
});
