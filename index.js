import express from "express";

const app = express();
const port = 3000;
const postData = [];
let counter = 0;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { posts: postData });
});

app.post("/newPost", (req, res) => {
    const id = counter++;
    const newPost = {id: id, title: req.body["ptitle"], postText: req.body["ptext"], date: new Date().toLocaleDateString(), charCounter: req.body["pText"].length};
    postData.push(newPost);
    console.log(postData);
    res.render("index", { posts: postData });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});