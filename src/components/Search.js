import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, books } from 'reducers/books'

const SearchForm = styled.section``
const Button = styled.button``

export const Search = () => {
  const dispatch = useDispatch()
  const query = useSelector((store) => store.books.query)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.length > 0) {
      dispatch(fetchBooks(`/books?title=${query}`))
    }
  }

  return (
    <SearchForm>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => dispatch(books.actions.setQuery(e.target.value))}
          placeholder="Search for title" />

        <Button type="submit">Search</Button>

      </form>
    </SearchForm>
  )
}
