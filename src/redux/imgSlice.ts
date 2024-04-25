import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "../components/App/App.types";

interface PhotoState {
    photos: Photo[];
    isLoading: boolean;
    error: string | null;
}

const initialState: PhotoState = {
    photos: [],
    isLoading: false,
    error: null,
}

const photoSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        setPhotos(state, action: PayloadAction<Photo[]>) {
            state.photos = action.payload;
            state.isLoading = false;
            state.error = null;
    },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
    },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
    },
    }
});

export const { setPhotos, setLoading, setError } = photoSlice.actions;
export default photoSlice.reducer;