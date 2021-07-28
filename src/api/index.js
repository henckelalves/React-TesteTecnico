const express = require("express");

const app = express();

app.use(express.json());

app.get("/projects", (request, response) => {
  // const { title, owner } = request.query;
  // console.log(title);
  // console.log(owner);
  return response.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json(["Projeto 4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 4", "Projeto 2", "Projeto 3"]);
});

app.listen("https://jsonplaceholder.typicode.com/posts", () => {
  console.log("🚀 Back-end Started!");
});
