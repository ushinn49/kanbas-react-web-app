import ModuleEditor from "./ModuleEditor";
import { FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" onClick={handleShow}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
      <Button variant="secondary" className="ms-1">
        <FaPlus
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Assignment
      </Button>
      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}