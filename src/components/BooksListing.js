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
  margin-top: 2rem;
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
        <Book>
          <Link>
            <h2>{book.title}</h2>
            <h3>{book.authors}</h3>
            <p>{book.average_rating}</p>
            <p>{book.num_pages}</p>
          </Link>
        </Book>
      ))}

    </BookShelf>
  )
}
