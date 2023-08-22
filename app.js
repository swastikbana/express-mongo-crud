const express = require('express');
const mongoose = require('mongoose');

const app = express();

const blogRouter = require('./routes/blogRoute')

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
).then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));

app.use("/api/blogs", blogRouter);

app.get('/', (req, res) => {
    res.send("Hello");
})
app.listen(3000, () => console.log(`Server is running on the port 3000`))