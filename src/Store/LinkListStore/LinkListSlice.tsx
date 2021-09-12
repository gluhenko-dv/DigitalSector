import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LinkItem, ReduxStatus } from '../../../interfaces';

type NewsState = ReduxStatus & {
    data: LinkItem[];
};

export const updateLinks = createAsyncThunk('linkList/update', async (newLink: LinkItem[]) => {
    const newData = localStorage.linkData ? JSON.parse(localStorage.linkData) : [];
    newData.push(newLink);
    let json = JSON.stringify(newData);
    localStorage.linkData = json;
    return newData;
});

const initialState: NewsState = {
    status: 'idle',
    error: null,
    data: []
};

const linkListSlice = createSlice({
    name: 'linkList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateLinks.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(updateLinks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = [...action.payload];
        });
        builder.addCase(updateLinks.rejected, (state, { error }) => {
            state.status = 'failed';
            state.error = error.message;
        });
    }
});

export default linkListSlice.reducer;
