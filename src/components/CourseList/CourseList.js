import React from 'react';
import CourseDetails from '../CourseDetail/CourseDetails';

const CourseList = ({ courses }) => {
  if (!courses || !Array.isArray(courses) || courses.length === 0) {
    return 
    // <p>No courses available</p>
    ;
  }

  
  return (
    <div>
      {courses.map((course) => (
        <CourseDetails key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
