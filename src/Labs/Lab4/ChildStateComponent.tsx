import { Button } from "react-bootstrap";

export default function ChildStateComponent({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  return (
    <div id="wd-child-state">
      <h3>Counter (Child) {counter}</h3>
      <Button
        onClick={() => setCounter(counter + 1)}
        id="wd-increment-child-state-click"
        className="btn-success me-2"
      >
        Increment
      </Button>
      <Button
        onClick={() => setCounter(counter - 1)}
        id="wd-decrement-child-state-click"
        className="btn-danger"
      >
        Decrement
      </Button>
      {/* <hr/> removed as ParentStateComponent has one */}
    </div>
  );
}