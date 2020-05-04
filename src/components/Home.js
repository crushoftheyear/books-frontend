import React from 'react'
import styled from 'styled-components/macro'
import { BooksListing } from './BooksListing'
import { Search } from './Search'

const Container = styled.div`
  margin: 2rem;
`

export const Home = () => {
  return (
    <Container>
      <Search />
      <BooksListing />
    </Container>
  )
}
