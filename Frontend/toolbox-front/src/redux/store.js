import { configureStore } from '@reduxjs/toolkit';
import filesReducer from './reducers/filesReducer';

const store = configureStore({
    reducer: {
        files: filesReducer,
    },
});

export default store;