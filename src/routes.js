const express = require("express");
const handle = require("express-async-handler");
const routes = express.Router();

const UserController = require("./controllers/userController");

routes.post("/user/:id", handle(controllers.UserController.store));

routes.get("user", UserController.list);
