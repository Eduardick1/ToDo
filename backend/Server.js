const MODEL_TODO = require("./Schema");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const Mongoose = require("mongoose");

Mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => console.log("Server is running"));
  })
  .catch((error) => console.log("ERROR DURING CONNECTING TO MONGO !", error));
app.get("/todos", async (_, res) => {
  try {
    const todos = await MODEL_TODO.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500);
  }
});
app.get("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await MODEL_TODO.findById(id);
    if (!todo) return res.status(404).send({ status: "NOT FOUND" });

    res.status(200).json({ status: "OK", data: todo });
  } catch (error) {
    res.status(500);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const result = await MODEL_TODO.findByIdAndUpdate(id, req.body);
    if (!result) return res.status(404).send("NOT FOUND");
    return res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.delete("/todos/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const result = await MODEL_TODO.findByIdAndDelete(id);
    if (!result) return res.status(404).send({ status: "NOT FOUND" });
    return res.status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const newTodo = {
      _id: req.body._id,
      status: req.body.status,
      text: req.body.text,
    };
    const todo = await MODEL_TODO.create(newTodo);
    return res
      .status(201)
      .json({ status: "OK", message: "CREATED", data: todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
