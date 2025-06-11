import { useState } from "react";
import { FormControl, Button, Alert } from "react-bootstrap";
import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    const [result, setResult] = useState<string | null>(null);

    const fetchResult = async (operation: string) => {
        const response = await axios.get(
            `${REMOTE_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`
        );
        setResult(response.data.toString());
    }

    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>
            <FormControl className="mb-2" value={a} type="number" onChange={(e) => setA(e.target.value)} />
            <FormControl className="mb-2" value={b} type="number" onChange={(e) => setB(e.target.value)} />
            <Button onClick={() => fetchResult('add')} className="btn btn-primary me-2">
                Add {a} + {b}
            </Button>
            <Button onClick={() => fetchResult('subtract')} className="btn btn-danger">
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
