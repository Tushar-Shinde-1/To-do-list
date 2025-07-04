import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db=new pg.Client({
user:"postgres",
host:"localhost",
database:"permalist",
password:"Tushar#118",
port:5432,
}
);

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];


app.get("/", async(req, res) => {
  try{
  const result= await db.query("SELECT * FROM items");
  items=result.rows;

  //console.log(items);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
}
catch(err){
  console.log(err);
}
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  //items.push({ title: item });
  try{
   await db.query("INSERT INTO items (title) values($1)",[item]);
  
 res.redirect("/");
  }
  catch(err){
    console.log(err);

  }
});

app.post("/edit", async(req, res) => {
  const id = req.body.updatedItemId;
  const title=req.body.updatedItemTitle;
  try{
    await db.query("Update items set title=($1) where id=$2",[title,id]);
    res.redirect("/");
  }
  catch(err){
    console.log(err);

  }

});


app.post("/delete", async(req, res) => {
  try{
const id=req.body.deleteItemId;
await db.query("delete from items where id=$1",[id]);
res.redirect('/');
  }
  catch(err){
console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
