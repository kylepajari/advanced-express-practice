let express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contactsRouter = require("./Routes/contactsRoutes");
const vehiclesRouter = require("./Routes/vehiclesRoutes");
const commentsRouter = require("./Routes/commentsRoutes");
const productsRouter = require("./Routes/productsRoutes");
app.use(
  bodyParser.json(),
  express.static("public"),
  contactsRouter,
  vehiclesRouter,
  commentsRouter,
  productsRouter
);

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log("Web server is now listening for messages on port", port);
});
