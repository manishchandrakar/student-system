// CourseListingScreen.js
import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList/CourseList';

function CourseListingScreen() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/courseModel.json'); // Absolute path to the JSON file in the public directory
        // console.log(response);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
         const {courses,students} = data;
        setCourses(courses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
        // console.log(courses,'Screeen');
  return (
    <div>
      {/* <h1>Course Listing</h1> */}
      {/* <CourseList courses={courses} /> */}

      {courses.length > 0 ?  <CourseList courses={courses} />:null}
    </div>
  );
}

export default CourseListingScreen;
