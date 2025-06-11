import { useState } from "react";
import { FormControl, Button, Alert } from "react-bootstrap";
import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const [result, setResult] = useState<string | null>(null);

  const fetchSum = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/add/${a}/${b}`);
    setResult(response.data.toString());
  };

  const fetchDiff = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`);
    setResult(response.data.toString());
  };

  return (
    <div>
      <h3>Path Parameters</h3>
      <FormControl className="mb-2" type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <FormControl className="mb-2" type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <Button onClick={fetchSum} className="btn btn-primary me-2">
        Add {a} + {b}
      </Button>
      <Button onClick={fetchDiff} className="btn btn-danger">
        Subtract {a} - {b}
      </Button>
      {result && (
        <Alert variant="success" className="mt-2">
          Result: {result}
        </Alert>
      )}
      <hr />
    </div>
  );
}
