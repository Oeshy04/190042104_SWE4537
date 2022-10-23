const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");

router.get("/", homeController.getHome);
router.get("/book-list", bookController.getBookList);
router.get("/books", bookController.getBook);
router.post("/books", bookController.postBook);
router.get('/book-list/delete/:id', bookController.deleteBook);
router.get("/updateBook/:id", bookController.getUpdateBook);
router.post("/updateBook/:id", bookController.updateBook);

module.exports = router;
