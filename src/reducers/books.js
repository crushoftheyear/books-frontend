import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const books = createSlice({
  name: 'books',
  initialState: {
    books: [],
    query: ''
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload
    },
    setQuery: (state, action) => {
      state.query = action.payload
    }
  }
})

export const fetchBooks = (path) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://express-api-books.herokuapp.com${path}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(books.actions.setBooks(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}