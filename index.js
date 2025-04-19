import express from "express";

const app = express();
const port = 3000;
const postData = [];
let counter = 1;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { posts: postData });
});

app.post("/newPost", (req, res) => {
    const id = counter++;
    const newPost = {id: id, title: req.body["ptitle"], postText: req.body["ptext"], date: new Date().toLocaleDateString(), charCounter: req.body["ptext"].length};
    postData.push(newPost);
    res.render("index", { posts: postData });
});

app.post("/delete", (req, res) => {
    const identifier = parseInt(req.body["delete"], 10);
    const index = postData.findIndex(post => post.id === identifier);
    postData.splice(index, 1);
    //console.log(index);
    res.render("index", { posts: postData });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
