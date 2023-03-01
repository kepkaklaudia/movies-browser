import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import movieListReducer from './features/movieListSlice';
import peopleListReducer from './features/peopleListSlice';

const sagaMiddleware= createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieData: movieListReducer,
        peopleData: peopleListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;