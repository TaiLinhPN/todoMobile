import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filterSlice";
import todoReducer from "../components/TodoList/todoSlice";
import themeReducer from "../screens/themeSlice";

const store = configureStore({
    reducer:{
        filters: filterReducer.reducer,
        todoList: todoReducer.reducer,
        theme: themeReducer.reducer
    }
})

export default store