import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filterSlice";
import todoReducer from "../components/TodoList/todoSlice";

const store = configureStore({
    reducer:{
        filters: filterReducer.reducer,
        todoList: todoReducer.reducer
    }
})

export default store