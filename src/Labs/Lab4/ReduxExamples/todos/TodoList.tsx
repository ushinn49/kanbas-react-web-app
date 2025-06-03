import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import type { TodoType } from "./todosReducer";
import { ListGroup } from "react-bootstrap";

interface TodosGlobalState {
  todosReducer: {
    todos: TodoType[];
  };
}

export default function TodoList() {
  const { todos } = useSelector((state: TodosGlobalState) => state.todosReducer);

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List (Redux Version)</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: TodoType) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}