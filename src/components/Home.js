import React from 'react'
import { BooksListing } from './BooksListing'
import { Search } from './Search'

export const Home = () => {
  return (
    <>
      <Search />
      <BooksListing />
    </>
  )
}
