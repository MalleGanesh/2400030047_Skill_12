import { useState } from "react";

function AddStudent({ addStudent, updateStudent, editingStudent }) {
  const [student, setStudent] = useState({
    name: editingStudent?.name ?? "",
    email: editingStudent?.email ?? "",
    course: editingStudent?.course ?? "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingStudent) {
      updateStudent(editingStudent.id, student);
    } else {
      addStudent(student);
    }

    setStudent({
      name: "",
      email: "",
      course: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={student.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={student.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={student.course}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default AddStudent;