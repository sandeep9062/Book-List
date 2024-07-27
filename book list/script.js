const bookTitleInput = document.getElementById('book-title');
const bookList = document.getElementById('book-list');
const addButton = document.getElementById('add-button');
const deleteButton = document.getElementById('delete-button');

addButton.addEventListener('click', function() {
  const bookTitle = bookTitleInput.value.trim();

  if (bookTitle) {
    const newListItem = document.createElement('li');
    newListItem.textContent = bookTitle;
    bookList.appendChild(newListItem);
    bookTitleInput.value = '';
  }
});

deleteButton.addEventListener('click', function() {
  const listItems = bookList.querySelectorAll('li');

  if (listItems.length > 0) {
    bookList.removeChild(listItems[listItems.length - 1]);
  } else {
    alert('No more books to delete!');
  }
});
