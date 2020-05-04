import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from 'reducers/books'
import styled from 'styled-components/macro'

const BookShelf = styled.section``

export const BooksListing = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks('/books'))
  }, [dispatch])

  const booksList = useSelector((state) => state.books.books)

  return (
    <BookShelf>
      {booksList.map((book) => (
        <h2>{book.title}</h2>
      ))}
    </BookShelf>
  )
}
