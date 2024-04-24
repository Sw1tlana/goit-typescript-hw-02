import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "../components/App/App.types";

interface PhotoState {
    photos: Photo[],
}

const initialState: PhotoState = {
    photos: [] ,
}

const photoSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        setPhotos(state, action: PayloadAction<Photo[]>) {
            state.photos = action.payload;
        }
    }
});

export const { setPhotos } = photoSlice.actions;
export default photoSlice.reducer;