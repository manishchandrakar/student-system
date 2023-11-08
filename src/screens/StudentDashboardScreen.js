import React, { useState, useEffect } from 'react';
// import StudentDashboard from '../components/StudentDashboard/StudentDashboard';

const StudentDashboardScreen = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses data for the student
    // Replace the following with actual data fetching logic
    // const fetchedEnrolledCourses = fetchEnrolledCoursesForStudent(studentId);
    const fetchedEnrolledCourses = []; // Replace with actual data

    setEnrolledCourses(fetchedEnrolledCourses);
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <StudentDashboard enrolledCourses={enrolledCourses} />
    </div>
  );
};

export default StudentDashboardScreen;
