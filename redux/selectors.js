import { createSelector } from "@reduxjs/toolkit";
export const todoListSelecter = (state) => state.todoList.todos;
export const statusCompletedSeleter = (state) => state.filters.status;
export const searchTextSeleter = (state) => state.filters.search;
export const prioritiesSeleter = (state) => state.filters.priority;

export const todoListRemaningSelecter =
    createSelector(todoListSelecter,
        statusCompletedSeleter,
        searchTextSeleter,
        prioritiesSeleter,
        (todoLists, statusCompleted, searchText, priorities) => {
            // console.log(todoLists);
            return todoLists.filter(todo => {
                if (statusCompleted === 'All') {
                    return priorities.length 
                    ? todo.name.includes(searchText) && priorities.includes(todo.prioriry) 
                    : todo.name.includes(searchText)

                }
                return (
                    (todo.name.includes(searchText) &&
                        (statusCompleted === 'Done') ? todo.completed : !todo.completed) && (priorities.length ? priorities.includes(todo.prioriry) : true )

                )
            })


        })

