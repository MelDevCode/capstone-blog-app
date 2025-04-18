import express from "express";

const app = express();
const port = 3000;
const postData = [];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { posts: postData });
});

app.post("/newPost", (req, res) => {
    const newPost = {title: req.body["ptitle"], postText: req.body["ptext"]};
    postData.push(newPost);
    console.log(postData);
    res.render("index", { posts: postData });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});