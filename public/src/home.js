//returns the total amount of books
const totalBooksCount = books => books.reduce((totalBooks, book) => {
  if (book) totalBooks += 1;
  return totalBooks;
}, 0)

//returns the total amount of accounts
function totalAccountsCount(accounts) {
  return accounts.length;
  }

//loops through the books then borrowed prperty and returns the amount of borrowed books
function booksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    let borrow = books[i].borrows;
  for (let j = 0; j < borrow.length; j++){
    let status = borrow[j].returned
    if ( status === false){
      count += 1;
    } 
  }
  }
  return count;
}

//loops through and counts the top five popular genres
function getMostCommonGenres(books) {
  const genre = books.map((book)=> book.genre)
  let arr = [];
let count = {};
genre.forEach(function(i) { count[i] = (count[i]||0) + 1;});
for (let key in count) {
  arr.push({
    name: key,
    count: count[key]
  });
}
return topFiveHelper(arr)
}

//loops through and returns the top five most popular books
function getMostPopularBooks(books) {
  let arr = []; 
  for(let i = 0;i < books.length;i++){ 
    let popBooks = {}; 
    popBooks.name = books[i].title; 
    popBooks.count = books[i].borrows.length; 
    arr.push(popBooks) } 
    return topFiveHelper(arr)
}

//returns the top five most popular authors
function getMostPopularAuthors(books, authors) {
  let arr = [];
  for (let i = 0;i < authors.length;i++){
    let author = {};
    author.name = `${authors[i].name.first} ${authors[i].name.last}`
    author.count = 0;
    for (let j=0; j<books.length; j++){
      if (books[j].authorId===authors[i].id){
        author.count += books[j].borrows.length
      }
    }
    arr.push(author);
  }
 
  return topFiveHelper(arr)
}

//Helper function that returns the top five results
const topFiveHelper = arr => arr.sort((a, b)=> a.count < b.count ? 1 : -1).slice(0, 5)

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

