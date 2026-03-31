import { useEffect, useState } from "react";
import axios from "axios";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/students");
      setStudents(response.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Unable to load students. Please start the backend at http://localhost:8080.");
    }
  };

  useEffect(() => {
    const loadStudents = async () => {
      await fetchStudents();
    };

    void loadStudents();
  }, []);

  const addStudent = async (student) => {
    try {
      await axios.post("http://localhost:8080/students", student);
      setError(null);
      fetchStudents();
    } catch (err) {
      console.error(err);
      setError("Unable to add student. Please verify the backend is running.");
    }
  };

  const updateStudent = async (id, student) => {
    try {
      await axios.put(`http://localhost:8080/students/${id}`, student);
      setEditingStudent(null);
      setError(null);
      fetchStudents();
    } catch (err) {
      console.error(err);
      setError("Unable to update student. Please verify the backend is running.");
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/students/${id}`);
      setError(null);
      fetchStudents();
    } catch (err) {
      console.error(err);
      setError("Unable to delete student. Please verify the backend is running.");
    }
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>
      {error && <div className="error-message">{error}</div>}
      <AddStudent
        key={editingStudent?.id ?? "new"}
        addStudent={addStudent}
        updateStudent={updateStudent}
        editingStudent={editingStudent}
      />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </div>
  );
}

export default App;