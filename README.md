# 🔐 Smart Login System

A simple, responsive **Login and Sign Up System** built with **HTML5**, **CSS3**, **Bootstrap 5**, and **Vanilla JavaScript**. This project demonstrates how to manage user data and authentication sessions using the browser's **LocalStorage**.

---
## 🔗 Live Demo
You can check the live version of this project here: 
[Click here to view the Demo](https://tokafawzy.github.io/Login-System/html/login.html)

## 🚀 Features

* **User Registration**: Create a new account with a name, email, and password.
* **User Authentication**: Validate email and password against stored data in `localStorage`.
* **Session Management**: Keeps the user logged in using a session key (`userName`).
* **Form Validation**: Provides feedback for empty fields and incorrect credentials.
* **Protected Home Page**: Prevents unauthorized access unless a user is logged in.
* **Secure Logout**: Clears session data and redirects the user safely to the login page.

---

## 🛠️ Technologies Used

* **HTML5**: Structure and semantics.
* **CSS3 & Bootstrap 5**: Styling and responsive grid system.
* **JavaScript (ES6)**: Logic, DOM manipulation, and LocalStorage.
* **FontAwesome**: Modern icons for inputs.

---
## 📝 How It Works

* **Register**: Start at `index.html`, enter your details (Name, Email, Password), and click **"Sign Up"** to save your data in LocalStorage.
* **Login**: Go to the login page, enter your registered email and password; the system will validate them against the stored users.
* **Home**: Upon success, you will be redirected to the home page where you'll see a **personalized welcome message** with your name.
* **Logout**: Click the **"Log Out"** button to safely clear your session data from the browser and return to the login screen.

---
## 📂 Project Structure

```text
TASK3/
├── css/
│   ├── bootstrap.css
│   └── style.css
├── html/
│   ├── login.html
│   └── home.html
├── js/
│   ├── script.js   (Sign-up Logic)
│   ├── login.js    (Login Logic)
│   └── home.js     (Home & Logout Logic)
└── index.html      (Main Sign-up Page)
```
