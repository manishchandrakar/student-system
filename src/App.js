import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseDetails from "./components/CourseDetail/CourseDetails";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import CourseList from "./components/CourseList/CourseList";
import CourseListingScreen from "./screens/CourseListingScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to My App</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<CourseListingScreen />} />
          <Route path="/course/:courseId" element={<CourseDetailScreen />} />
        </Routes>
      </Router>
      <CourseDetails />
      <StudentDashboard />
      <CourseList />
    </div>
  );
}

export default App;
