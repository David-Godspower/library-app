# 📚 Digital Library Manager

Digital Library Manager is a browser-based book tracking application built with HTML, CSS, and vanilla JavaScript. Add books to a personal library, record whether you have read them, update their reading status, and remove books when they are no longer needed.

The app stores the library in the browser's `localStorage`, so books remain available after refreshing the page in the same browser.

## ✨ Features

- **Add books:** Save a book title, author, page count, and read status.
- **Read tracking:** Mark books as read or unread at any time.
- **Remove books:** Delete individual books from the library.
- **Persistent storage:** Saves library data locally with `localStorage`.
- **Unique book IDs:** Assigns each book a UUID when supported by the browser.
- **Reset library:** Clear the saved library after confirmation.
- **Input validation:** Requires valid titles, authors, and positive page counts.
- **Book confirmation dialog:** Confirms successful additions using the native `<dialog>` element.
- **Sign-up page:** Includes a responsive account creation form with browser validation.
- **Password controls:** Provides password confirmation feedback and show/hide password toggles.
- **Phone formatting:** Formats Nigerian phone numbers using the `+234` prefix.
- **Responsive design:** Adapts the library cards, forms, and footer for smaller screens.

## 🛠️ Built with

- **HTML5** for page structure, forms, validation, and the native dialog
- **CSS3** for layout, responsive styling, cards, colors, and transitions
- **JavaScript (ES6+)** for book management, event handling, validation, and local storage
- **Web Storage API** for persisting the library locally
- **Web Crypto API** for UUID generation when `crypto.randomUUID()` is available
- **Font Awesome** for interface and social media icons

## 🚀 Getting started

### Prerequisites

You only need a modern web browser. No build tools, package manager, backend, or database is required.

### Run locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/david-godspower/library-app.git
   ```

2. **Open the project directory**

   ```bash
   cd library-app
   ```

3. **Launch the app**

   Open `index.html` directly in your browser, or use the **Live Server** extension in VS Code.

## 🎯 How to use

### Manage books

1. Click **+ Add Book**.
2. Enter the title, author, and number of pages.
3. Check **Have you read the book?** if applicable.
4. Click **Add Book**.
5. Use **Mark as Read** or **Mark as Unread** to update a book's status.
6. Use **Remove** to delete a book.
7. Use **Reset Library** to clear all saved books after confirmation.

### Sign up

Open `signup.html` to access the sign-up form. The form validates:

- First and last names
- Email address
- Nigerian phone number format
- Password length between 8 and 15 characters
- Matching password and confirmation fields

After a valid submission, the form navigates to `thankyou.html`.

## 💾 Data storage

Books are stored in the browser under the `myLibrary` local storage key. Stored records contain:

```json
{
  "id": "unique-book-id",
  "title": "Example Book",
  "author": "Example Author",
  "pages": 250,
  "read": false
}
```

This is client-side storage only. Data is not synchronized between browsers or devices, and clearing browser site data removes the saved library.

## 📁 Project structure

```text
library-app/
├── index.html       # Main library manager page
├── script.js        # Book state, storage, validation, and interactions
├── styles.css       # Main library page styles
├── signup.html      # Account creation form
├── style.css        # Sign-up page styles
├── thankyou.html    # Successful sign-up confirmation page
├── img/
│   ├── bg.png       # Sign-up page background
│   ├── eye-icon.jpg # Image asset
│   ├── lg.png       # Library logo
│   └── logo.png     # Logo asset
├── LICENSE          # MIT license
└── README.md        # Project documentation
```

## 🔐 Privacy

The library data is stored locally in your browser and is not sent to a server by the application. The sign-up page is a frontend demonstration and does not implement account creation, authentication, or backend persistence.

The project loads Font Awesome from cdnjs, so an internet connection is required for those icons to appear.

## 👤 Author

**David Godspower Ajala**

- [Portfolio](https://david-godspower.github.io/david-portfolio/)
- [LinkedIn](https://www.linkedin.com/in/david-godspower-ajala/)
- [Facebook](https://facebook.com/DavidGodspowerAjalaDGA/)
- [Twitter/X](https://x.com/DavidGAjala)
- [Email](mailto:ajaladavid11@gmail.com)

## 📄 License

This project is available under the [MIT License](LICENSE).
