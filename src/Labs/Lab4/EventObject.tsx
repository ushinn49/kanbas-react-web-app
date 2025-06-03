import React, { useState } from "react";

export default function EventObject() {
  const [event, setEvent] = useState<any>(null); // Explicitly type if possible, or use any for this example

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Create a new object to avoid modifying the original event directly if it's pooled
    const eventDetails: any = {
      type: e.type,
      target: (e.target as HTMLElement).outerHTML, // Get HTML representation of the target
      currentTarget: (e.currentTarget as HTMLElement).outerHTML,
      nativeEvent: "Details omitted for brevity, contains native browser event",
      bubbles: e.bubbles,
      cancelable: e.cancelable,
      timeStamp: e.timeStamp,
      defaultPrevented: e.defaultPrevented,
      isTrusted: e.isTrusted,
      clientX: e.clientX, // Example of other properties
      clientY: e.clientY,
    };
    // Deleting view and _targetInst is often done to avoid circular references with React's synthetic event system
    // For this example, we construct what we want to show.
    setEvent(eventDetails);
  };

  return (
    <div id="wd-event-object">
      <h2>Event Object</h2>
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}