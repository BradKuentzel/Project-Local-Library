function findAccountById(accounts, id) {
  let account = accounts.find(account=> account.id == id)
  return account
}

function sortAccountsByLastName(accounts){
  return accounts.sort((last1, last2)=> last1.name.last > last2.name.last ? 1 : -1)
}

function numberOfBorrows(account, books) {
  const acId = account.id;
  let total = 0;
 for(let book in books){
   const borrowed = books[book].borrows;
   for(let borrow in borrowed){
     if(borrowed[borrow].id === acId){
       total += 1;
     }
   }
 }
 return total;
}

const getBooksPossessedByAccount = (account, books, authors) => { 
  let booksArray =[]; 
  for(let i =0; i < books.length;i++){ 
    let book = books[i]; 
    const {id, title, genre, borrows} = book; 
    for (let j = 0;j<borrows.length;j++){ 
      if (borrows[j].id === account.id && borrows[j].returned  === false){ 
        for(let k = 0;k < authors.length;k++){ 
          let author = authors[k]; 
          if(author.id === book.authorId){ 
          let tempArray ={id, title, genre, author, borrows}
          booksArray.push(tempArray);
          } 
        } 
      } 
    } 
  } 
  return booksArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
