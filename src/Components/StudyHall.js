import React from "react";
import CourseCard from "./CourseCard";
import { courseList } from "./tempData";


function StudyHall(){

    return(
        <>
        <div>
            <div style={{
                margin: '1rem 1rem 1rem 3rem',
                color: 'white',
                fontSize: '2.5rem',
            }}>Your Courses:</div>

            <div style={{
                margin: '3rem',
                display: 'grid',
                gap: '3rem',
                gridTemplateColumns: 'repeat(auto-fit, 15rem)'
            }}>
            {courseList.map((course)=>{
                return(
                    <CourseCard key={course.id} course={course}/>
                )
            })}
            </div>
        </div>
        </>
    );
}

export default StudyHall