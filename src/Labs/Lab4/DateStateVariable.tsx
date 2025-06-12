import { useState } from "react";
import { Form } from "react-bootstrap";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());

  // Utility function to convert Date object to 'YYYY-MM-DD' format for HTML date input
  const dateToHtmlDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>Raw Date Object: {JSON.stringify(startDate)}</h3>
      <h3>Formatted for Input: {dateToHtmlDateString(startDate)}</h3>
      <Form.Control
        id="wd-date-state-input"
        type="date"
        value={dateToHtmlDateString(startDate)} // Use value for controlled input
        onChange={(e) => {
          // When creating a new Date from input value, ensure it's handled correctly
          // The input e.target.value gives 'YYYY-MM-DD'
          // To maintain local time, and avoid timezone shifts from new Date(string):
          const parts = e.target.value.split('-');
          const year = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1; // JS months are 0-indexed
          const day = parseInt(parts[2], 10);
          setStartDate(new Date(year, month, day));
        }}
      />
      <hr />
    </div>
  );
}