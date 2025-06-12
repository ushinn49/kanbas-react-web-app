import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo} from "./todosReducer";
import type { TodoType } from "./todosReducer";
import { Button, FormControl, ListGroup } from "react-bootstrap";

interface TodosGlobalState {
  todosReducer: {
    todo: TodoType;
  };
}

export default function TodoForm() {
  const { todo } = useSelector((state: TodosGlobalState) => state.todosReducer);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.title.trim() === "") return;
    dispatch(addTodo({ title: todo.title }));
  };

  const handleUpdateTodo = () => {
    if (!todo.id || todo.title.trim() === "") return;
    dispatch(updateTodo(todo));
  };

  return (
    <ListGroup.Item>
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        placeholder="New Todo Title"
        className="mb-2"
      />
      <Button onClick={handleAddTodo} id="wd-add-todo-click" variant="success" className="me-2">
        Add
      </Button>
      <Button onClick={handleUpdateTodo} id="wd-update-todo-click" variant="warning">
        Update
      </Button>
    </ListGroup.Item>
  );
}