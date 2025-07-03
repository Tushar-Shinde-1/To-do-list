# Permalist - Simple To-Do List App 📝

A Node.js application using Express, PostgreSQL, and EJS templating to manage a simple to-do list.

---

## 🚀 Features

- View all tasks
- Add new tasks
- Edit existing tasks
- Delete tasks
- PostgreSQL database integration

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Templating Engine**: EJS
- **Other**: body-parser

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/permalist.git
cd permalist


2. Install dependencies
bash
Copy
Edit
npm install


3. Set up PostgreSQL
Database Configuration:
Create a PostgreSQL database and table using the following SQL:

sql
Copy
Edit
CREATE DATABASE permalist;

\c permalist

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);


Update your PostgreSQL credentials in index.js:

js
Copy
Edit
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "Tushar#118",
  port: 5432,
});


🚴 Running the App
bash
Copy
Edit
node index.js
Then open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
📁 Folder Structure
pgsql
Copy
Edit
permalist/
│
├── public/               # Static assets (CSS, JS, images)
├── views/                # EJS templates
│   └── index.ejs         # Main page template
├── index.js              # Main server file
├── package.json
└── README.md
