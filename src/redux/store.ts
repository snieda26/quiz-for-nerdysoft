import { combineReducers, createStore } from "redux";
import { quizReducer } from "./reducers";

const rootReducer = combineReducers({
    quiz: quizReducer
})


export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)