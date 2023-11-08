import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CourseDetailScreen({ courses }) {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = courses.find((c) => c.id === parseInt(courseId, 10));
        if (response) {
          setCourse(response);
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId, courses]);

  return (
    <div>
      <h1>Course Detail</h1>
      <Link to="/">Back to Course Listing</Link>
      {course ? (
        <div>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          {/* Render other course details here */}
        </div>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
}

export default CourseDetailScreen;