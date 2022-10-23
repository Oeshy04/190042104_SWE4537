const books = require("./../models/books");
const bookModel = require("./../models/books");

const getBookList = async (req, res) => {
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    console.log(data);
    data.forEach((book) => {
      books.push({ id: book.id, name: book.name, author: book.author, genre: book.genre });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};


const deleteBook = (req, res) =>{
  const bookID = req.params.id
  bookModel.findOneAndDelete({_id : bookID}).then(()=>{
      console.log("Delete id:" + bookID)
  }).catch((error)=>{console.log(error)}).finally(()=>{
      res.redirect("/book-list")
  })
}



const getUpdateBook = async (req, res) => {
  try {
    const post = await bookModel.findById(req.params.id);
    console.log(req.params.id);
    res.render("updateBook", { book: post });
  } catch (err) {
    res.json({ message: err });
  }
}

const updateBook = (req,res) => {
  updateId = req.params.id
  bookModel.findByIdAndUpdate(updateId,{
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre
  },(err)=>{
      if (err){
          console.log(err)
      }
      else{
          res.redirect("/book-list")
      }
  })
}



module.exports = { getBookList, getBook, postBook, deleteBook, updateBook, getUpdateBook };