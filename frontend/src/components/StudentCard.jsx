import React from "react";

function StudentCard({ name, age }) {
  return (
    <li>
      Name: {name}, Age: {age}
    </li>
  );
}

export default StudentCard;
