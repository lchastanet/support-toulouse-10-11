import { useState } from "react";
import axios from "axios";

function StudentForm({ students, setStudents }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleForm = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/students", { name, age }).then((res) => {
      const newStudent = res.data;
      setStudents([...students, newStudent]);
    });
  };

  return (
    <form action="" onSubmit={handleForm}>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        id="name"
        value={name}
      />
      <input
        onChange={(e) => setAge(e.target.value)}
        type="number"
        name="age"
        id="age"
        value={age}
      />
      <input type="submit" name="send" id="send" value="Send" />
    </form>
  );
}

export default StudentForm;
