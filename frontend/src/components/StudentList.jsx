function StudentList({ students, deleteStudent, editStudent }) {
  return (
    <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <button onClick={() => editStudent(student)}>Update</button>
                <button onClick={() => deleteStudent(student.id)} style={{ marginLeft: "10px" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No students found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default StudentList;