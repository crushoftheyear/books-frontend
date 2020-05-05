import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { fetchBooks } from 'reducers/books'

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
`
const SearchFields = styled.div`

`
const Button = styled.button``
const Filter = styled.div`
  span {
    font-size: .8rem;
  }
`

export const Search = () => {
  const dispatch = useDispatch()
  const [titleValue, setTitleValue] = useState('')
  const [authorValue, setAuthorValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (titleValue.length > 0) {
      dispatch(fetchBooks(`/books?title=${titleValue}`))
      setTitleValue('')
    }
    if (authorValue.length > 0) {
      dispatch(fetchBooks(`/books?author=${authorValue}`))
      setAuthorValue('')
    }
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFields>
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
      </SearchFields>

      <Filter>
        <span>Sort by: </span>
        <Button type="button" onClick={() => dispatch(fetchBooks(`/books?title=${titleValue}&/books?author=${authorValue}&sort=rating`))}>Rating</Button>
        <Button type="button" onClick={() => dispatch(fetchBooks(`/books?title=${titleValue}&/books?author=${authorValue}&sort=pages`))}>Pages</Button>
      </Filter>
    </SearchForm>
  )
}
