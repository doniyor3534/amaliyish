import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})