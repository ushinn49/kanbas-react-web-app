import { createSlice} from "@reduxjs/toolkit";
import  type { PayloadAction } from "@reduxjs/toolkit";
export interface TodoType {
  id: string;
  title: string;
}

interface TodosState {
  todos: TodoType[];
  todo: { title: string; id?: string };
}

const initialState: TodosState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const newTodo: TodoType = {
        ...action.payload,
        id: new Date().getTime().toString(),
      };
      state.todos.unshift(newTodo);
      state.todo = { title: "" };
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todo = { title: "" };
    },
    setTodo: (state, action: PayloadAction<TodoType>) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;