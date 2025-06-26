import React from "react";

export default function Users({ name }: { name?: string }) {
  return (
    <div>
      <h2>Users</h2>
      {name && <p>User name: {name}</p>}
    </div>
  );
} 