import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./Table.tsx";
import * as courseClient from "../client";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsersForCourse = async () => {
    if (!cid) return;
    try {
      const roster = await courseClient.findUsersForCourse(cid);
      setUsers(roster);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsersForCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  return (
    <div>
      <h3>People</h3>
      <PeopleTable users={users} />
    </div>
  );
}

