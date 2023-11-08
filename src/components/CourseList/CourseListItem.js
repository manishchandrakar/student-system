import React from "react";

const CourseListItem = ({cousre}) =>{

    return(

        <div className="course-item">
            <h3>{cousre.name}</h3>
            <p>Instructor : {cousre.instructor}</p>

            
        </div>
    );

};

export default  CourseListItem;