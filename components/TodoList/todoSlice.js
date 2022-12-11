import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todoList',
    initialState: { status: 'idle', todos: [] },

    extraReducers: builder => {
        builder
          .addCase(fetechTodos.pending, (state, action) => {
            state.status = 'loading';
          })
          .addCase(fetechTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.status = 'idle';
          })
          .addCase(addNewTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
            state.status = 'idle';
          })
          .addCase(addNewTodo.pending, (state, action) => {
            state.status = 'loading';
          })
          .addCase(updateCompletedTodo.fulfilled, (state, action) => {
            const currentTodo = state.todos.find(
              todo => todo.id === action.payload.id,
            );
            currentTodo.completed = !currentTodo.completed;
          })
          .addCase(updatePrioriryTodo.fulfilled, (state, action) => {
            const currentTodo = state.todos.find(
              todo => todo.id === action.payload.id,
            );
            currentTodo.prioriry = action.payload.prioriry;
          })
          .addCase(updateDeletedTodo.fulfilled, (state, action) => {
            const currentTodo = state.todos.find(
              todo => todo.id === action.payload.id,
              );
              console.log(currentTodo.deleted);
            currentTodo.deleted = !currentTodo.deleted;
          })
          .addCase(deleteTodo.fulfilled, (state, action) => {
            state.todos.splice(
              state.todos.findIndex(todo => todo.id === action.payload.id),
              1,
            );
          });

    }


})
export default todosSlice


export const fetechTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch(`https://61daee3c4593510017aff71b.mockapi.io/todo`)
    // console.log(res);
    return res.json()
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
    const res = await fetch(`https://61daee3c4593510017aff71b.mockapi.io/todo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
    })
    // console.log(res);
    return res.json()
})

export const updateCompletedTodo = createAsyncThunk('todos/updateCompletedTodo', async (data) => {

    const res = await fetch(`https://61daee3c4593510017aff71b.mockapi.io/todo/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            completed: data.status
        })
    })
    return res.json()
})

export const updatePrioriryTodo = createAsyncThunk('todos/updatePrioriryTodo', async (data) => {
    console.log(data);
    const res = await fetch(`https://61daee3c4593510017aff71b.mockapi.io/todo/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            prioriry: data.status
        })
    })
    return res.json()
})


export const updateDeletedTodo = createAsyncThunk(
  'todos/updateDeletedTodo',
    async data => {
      console.log(data);
    const res = await fetch(
      `https://61daee3c4593510017aff71b.mockapi.io/todo/${data.id}`,
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          deleted: data.status,
        }),
      },
    );
    return res.json();
  },
);

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    const res = await fetch(`https://61daee3c4593510017aff71b.mockapi.io/todo/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },

    })
    // console.log(res);
    return res.json()
})