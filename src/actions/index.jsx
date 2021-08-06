const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

const bookRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
}

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(bookRequested());
    bookstoreService
      .getBooks()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((err) => dispatch(booksError(err)));
  }

export {
    fetchBooks
};