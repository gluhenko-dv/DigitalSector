import { createSlice } from '@reduxjs/toolkit';
import { CategoryItem, ReduxStatus } from '../../../interfaces/index';

type NewsState = ReduxStatus & {
    data: CategoryItem[];
};

const initialState: NewsState = {
    status: 'idle',
    error: null,
    data: []
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: () => {}
});

export default categoriesSlice.reducer;
