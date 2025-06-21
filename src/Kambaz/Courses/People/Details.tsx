import { useEffect, useState } from "react";
import { FaUserCircle, FaPencilAlt, FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "../../Account/client";
import { FormControl } from "react-bootstrap";

export default function PeopleDetails() {
    const { uid } = useParams();
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();

    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
    };

    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        navigate(-1);
    };

    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        navigate(-1);
    };

    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);

    if (!uid) return null;

    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <button onClick={() => navigate(-1)} className="btn position-absolute end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" />
            </button>
            <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
            <div className="text-danger fs-4">
                {!editing && (
                    <FaPencilAlt onClick={() => setEditing(true)} className="float-end fs-5 mt-2 wd-edit" />
                )}
                {editing && (
                    <FaCheck onClick={() => saveUser()} className="float-end fs-5 mt-2 me-2 wd-save" />
                )}
                {!editing && (
                    <div className="wd-name" onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}
                    </div>
                )}
                {user && editing && (
                    <FormControl
                        className="w-50 wd-edit-name"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") saveUser();
                        }}
                    />
                )}
            </div>
            <span className="wd-roles"><b>Roles:</b> {user.role} </span> <br />
            <span className="wd-login-id"><b>Login ID:</b> {user.loginId}</span> <br />
            <span className="wd-section"><b>Section:</b> {user.section}</span> <br />
            <span className="wd-total-activity"><b>Total Activity:</b> {user.totalActivity}</span>
            <hr />
            <button onClick={() => deleteUser(uid!)} className="btn btn-danger float-end wd-delete"> Delete </button>
            <button onClick={() => navigate(-1)} className="btn btn-secondary float-start float-end me-2 wd-cancel"> Cancel </button>
        </div>
    );
}