import { useState } from "react";
import { Button, ListGroup, FormControl } from "react-bootstrap"; // Assuming Bootstrap

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [element, setElement] = useState(0); // For adding a specific element

  const addElement = () => {
    // Using the 'element' state variable to add a new number
    setArray([...array, element]);
    setElement(0); // Reset input field
  };
  
  const addRandomElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <div className="mb-2">
        <FormControl
            type="number"
            value={element}
            onChange={(e) => setElement(parseInt(e.target.value))}
            className="d-inline-block w-auto me-2"
        />
        <Button onClick={addElement} className="me-2 btn-success">Add Element</Button>
        <Button onClick={addRandomElement} className="btn-warning">Add Random Element</Button>
      </div>
      <ListGroup>
        {array.map((item, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {item}
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteElement(index)}
              id={`wd-delete-element-${index}`}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}