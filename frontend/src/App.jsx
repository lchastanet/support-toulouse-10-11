import { useEffect } from "react";
import { useState } from "react";

import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} {...student} />
      ))}
      <StudentForm students={students} setStudents={setStudents} />
    </div>
  );
}

export default App;
