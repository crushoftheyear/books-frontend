import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { books } from 'reducers/books'
import { Home } from 'components/Home'

const reducer = combineReducers({
  ui: ui.reducer,
  books: books.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </Provider>
  )
}
