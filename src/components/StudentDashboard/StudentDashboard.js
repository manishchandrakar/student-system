import React from "react";

const StudentDashboard = ({ enrolledcourse }) => {
  if (!Array.isArray(enrolledcourse) || enrolledcourse.length === 0) {
    return 
    // <div>{}</div>
    ;
  }

  return (
    <div>
      <h2>Student Dashboard</h2>
      {enrolledcourse.map((course) => (
        <div key={course.id}>
          <p>Course: {course.name}</p>
          <p>Instructor: {course.instructor}</p>
          <p>Progress: {course.progress}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
