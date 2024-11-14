import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../feature/user/userSlice";
import movieReducers from "../feature/movie/movieSlice";
const store = configureStore({
  reducer: {
    user: userReducers,
    movie: movieReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
