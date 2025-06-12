import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./addReducer";
import { FormControl, Button } from "react-bootstrap";

interface AddState {
  addReducer: {
    sum: number;
  };
}

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);

  const { sum } = useSelector((state: AddState) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-25" id="wd-add-redux">
      <h1>Add Redux</h1>
      <h2>{a} + {b} = {sum}</h2>
      <FormControl
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value) || 0)}
        className="mb-2"
        id="wd-add-redux-a"
      />
      <FormControl
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value) || 0)}
        className="mb-2"
        id="wd-add-redux-b"
      />
      <Button
        id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}
        variant="primary"
      >
        Add Redux
      </Button>
      <hr />
    </div>
  );
}