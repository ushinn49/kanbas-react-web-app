import { useDispatch } from "react-redux";
import { deleteTodo, setTodo} from "./todosReducer";
import type {TodoType} from "./todosReducer";
import { Button, ListGroup } from "react-bootstrap";

interface TodoItemProps {
  todo: TodoType;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item key={todo.id}>
      {todo.title}
      <Button
        onClick={() => dispatch(deleteTodo(todo.id))}
        id={`wd-delete-todo-click-${todo.id}`}
        variant="danger"
        size="sm"
        className="float-end ms-2"
      >
        Delete
      </Button>
      <Button
        onClick={() => dispatch(setTodo(todo))}
        id={`wd-set-todo-click-${todo.id}`}
        variant="primary"
        size="sm"
        className="float-end"
      >
        Edit
      </Button>
    </ListGroup.Item>
  );
}