const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");

server.use(jsonServer.defaults());
server.use(jsonServer.router("db.json"));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(PORT, function () {
  console.log(`Server Listening on PORT: ${PORT}`);
});
