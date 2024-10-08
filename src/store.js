import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./components/Reducers"

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
})

export default store
