import React from 'react';
import '../css/CourseDetails.css';

const CourseDetails = ({ course }) => {
  if (!course) {
    return 
    // <div>Loading...</div>
    ;
  }

  return (
    <div className="course-details-container">
      <div className="course-details-header">
        <h1>{course.name}</h1>
      </div>
      <div className="course-details-info">
        <p>Instructor: {course.instructor}</p>
        <p>Description: {course.description}</p>
        <p>Enrollment Status: {course.enrollmentStatus}</p>
        <p>Duration: {course.duration}</p>
        <p>Schedule: {course.schedule}</p>
        <p>Location: {course.location}</p>
      </div>
      <div className="course-details-prerequisites">
        <p>Prerequisites:</p>
        <ul>
          {course.prerequisites.map((prerequisite, index) => (
            <li key={index}>{prerequisite}</li>
          ))}
        </ul>
      </div>
      <div className="course-details-syllabus">
        <p>Syllabus:</p>
        <ul>
          {course.syllabus.map((item) => (
            <li key={item.week}>
              <strong>Week {item.week}:</strong> {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="course-details-enrolled-students">
        <p>Enrolled Students:</p>
        <ul>
          {course.students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
