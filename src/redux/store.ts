
import { configureStore } from "@reduxjs/toolkit";
import photoReducer from '../redux/imgSlice';
export type RootState = ReturnType<typeof store.getState>


export const store = configureStore ({
    reducer: {
      photos:  photoReducer,
    }
})