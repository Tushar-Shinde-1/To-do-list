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
git clone https://github.com/Tushar-Shinde-1/To-do-list.git
cd To-do-list
```


2. Install dependencies
```bash

npm install
```


3. Set up PostgreSQL
   
Database Configuration:
Create a PostgreSQL database and table using the queries mentioned in queries.sql file



Update your PostgreSQL credentials in index.js:

```js

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "xyz",
  port: 5432,
});
```


🚴 Running the App
```bash

node index.js
```
Then open your browser and go to:

```arduino

http://localhost:3000
```

📁 Folder Structure
```pgsql

permalist/
│
├── public/               # Static assets (CSS, JS, images)
├── views/                # EJS templates
│   └── index.ejs         # Main page template
├── index.js              # Main server file
├── package.json
└── README.md
|__queries.sql

```

