import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from 'reducers/books'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const BookShelf = styled.section`
  display: flex;
  flex-direction: column;
`

const Book = styled.article`
  flex: 0 1 100%;
  margin-top: 1.5rem;
  padding: 0 1.5rem 1.5rem;
  border: 1px solid #ccc;
`

const Text = styled.p`
  margin: 0;
`

export const BooksListing = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks('/books'))
  }, [dispatch])

  const booksList = useSelector((state) => state.books.books)

  return (
    <BookShelf>

      {booksList.map((book) => (
        <Book key={book.id}>
          <Link to="">
            <h2>{book.title}</h2>
            <h3>{book.authors}</h3>
            <Text>Rating: {book.average_rating}</Text>
            <Text>Pages: {book.num_pages}</Text>
          </Link>
        </Book>
      ))}

    </BookShelf>
  )
}
