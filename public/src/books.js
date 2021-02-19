//loops through the authors and returns a match
function findAuthorById(authors, id) {
  for(let i = 0;i < authors.length;i++){
    if(authors[i].id === id){
      return authors[i];
    }
  }
 }
 
 //loops through the books and returns a match
 function findBookById(books, id) {
   for(let book in books){
      book = books[book];
     if(book.id === id){
       return book
     }
   }
   }
//creates 2 arrays with returned books and books that are borrowed
function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  let returnedBooks = books.filter(book =>{return book.borrows[0].returned === true});
  return [borrowedBooks, returnedBooks];
}

//creates an array and pushes in the book and the corresponding account info
function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.forEach(account=> {book.borrows.forEach(transactions=> {
    if(transactions.id === account.id){
      let accObject = {...account};
      accObject.returned = transactions.returned;
      borrowers.push(accObject);
    }
  })
})
  return borrowers.slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};