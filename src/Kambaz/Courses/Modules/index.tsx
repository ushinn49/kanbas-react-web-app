import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as courseClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
    const { cid } = useParams();
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const [moduleName, setModuleName] = useState("");
    const [editingModule, setEditingModule] = useState<any>(null);
    const dispatch = useDispatch();

    const fetchModulesForCourse = async () => {
        const modules = await courseClient.findModulesForCourse(cid!);
        dispatch(setModules(modules));
    };

    useEffect(() => {
        fetchModulesForCourse();
    }, [cid]);

    const addModuleHandler = async () => {
        try {
            if (!moduleName.trim()) {
                alert("Module name cannot be empty");
                return;
            }
            console.log("Adding module with name:", moduleName, "for course:", cid);
            const newModule = await courseClient.createModuleForCourse(cid!, {
                name: moduleName,
                course: cid,
            });
            console.log("Module created successfully:", newModule);
            dispatch(addModule(newModule));
            setModuleName("");
        } catch (error) {
            console.error("Error adding module:", error);
            alert("Failed to add module. Please check console for details.");
        }
    };
    
    const deleteModuleHandler = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    }
    
    const updateModuleHandler = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
        setEditingModule(null);
    };

    const startEditingModule = (module: any) => {
        setEditingModule(module);
    };

    const cancelEditingModule = () => {
        setEditingModule(null);
    };

    return (
        <div className="container">
            <h2>Modules</h2>
            <div className="mb-3">
                <div className="input-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="New Module Name"
                        value={moduleName}
                        onChange={(e) => setModuleName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                addModuleHandler();
                            }
                        }}
                    />
                    <button className="btn btn-success" onClick={addModuleHandler}>
                        Add Module
                    </button>
                </div>
            </div>
            <ul className="list-group">
                {modules.filter((module: any) => module.course === cid).map((module: any) => (
                    <li key={module._id} className="list-group-item">
                        {editingModule && editingModule._id === module._id ? (
                            <div className="input-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    value={editingModule.name}
                                    onChange={(e) => setEditingModule({...editingModule, name: e.target.value})}
                                />
                                <button className="btn btn-success" onClick={() => updateModuleHandler(editingModule)}>
                                    Save
                                </button>
                                <button className="btn btn-secondary" onClick={cancelEditingModule}>
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-between align-items-center">
                                <span>{module.name}</span>
                                <div>
                                    <button className="btn btn-warning me-2" onClick={() => startEditingModule(module)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => deleteModuleHandler(module._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}