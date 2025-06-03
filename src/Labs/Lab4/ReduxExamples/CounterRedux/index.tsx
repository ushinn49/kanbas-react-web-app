import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
import { Button } from "react-bootstrap";

interface CounterState {
  counterReducer: {
    count: number;
  };
}

export default function CounterRedux() {
  const { count } = useSelector((state: CounterState) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <Button
        onClick={() => dispatch(increment())}
        id="wd-counter-redux-increment-click"
        className="me-2"
        variant="success"
      >
        Increment
      </Button>
      <Button
        onClick={() => dispatch(decrement())}
        id="wd-counter-redux-decrement-click"
        variant="danger"
      >
        Decrement
      </Button>
      <hr />
    </div>
  );
}