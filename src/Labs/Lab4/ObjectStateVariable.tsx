import { useState } from "react";
import { FormControl } from "react-bootstrap"; // FormControl for consistency

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <FormControl
        id="wd-object-state-name"
        className="mb-2"
        type="text"
        value={person.name} // Controlled input
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <FormControl
        id="wd-object-state-age"
        type="number"
        value={person.age} // Controlled input
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) || 0 }) // Ensure age is a number
        }
      />
      <hr />
    </div>
  );
}