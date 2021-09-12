import { combineReducers } from '@reduxjs/toolkit';
import linkListSlice from './LinkListStore/LinkListSlice';
import categoriesSlice from './Categories/CategoriesSlice';

const rootReducer = combineReducers({
    linkList: linkListSlice,
    categories: categoriesSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
