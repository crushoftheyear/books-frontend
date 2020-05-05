import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { fetchBooks } from 'reducers/books'

const SearchForm = styled.section``
const Button = styled.button``

export const Search = () => {
  const dispatch = useDispatch()
  // const query = useSelector((store) => store.books.query)
  const [titleValue, setTitleValue] = useState('')
  const [authorValue, setAuthorValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (titleValue.length > 0) {
      dispatch(fetchBooks(`/books?title=${titleValue}`))
    }
    if (authorValue.length > 0) {
      dispatch(fetchBooks(`/books?author=${authorValue}`))
    }
  }

  return (
    <SearchForm>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          placeholder="Search for title" />

        <input
          type="text"
          value={authorValue}
          onChange={(e) => setAuthorValue(e.target.value)}
          placeholder="Search for author" />

        <Button type="submit">Search</Button>

      </form>
    </SearchForm>
  )
}
