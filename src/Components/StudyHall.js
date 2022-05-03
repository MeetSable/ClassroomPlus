import React from "react";
import CourseCard from "./CourseCard";


function StudyHall(){
    const courseList = [
        {
            id:'1',
            name:'Course 1',
            faculty: 'Smarthak Patel',
            tasks: [
                'heeeee',
                'task 2',
                'task 3',
            ]
        },
        {
            id:'2',
            name:'Course 2',
            faculty: 'faculty 2',
            tasks: [
                'task 11',
                'task 22',
            ]
        },
        {
            id: '3',
            name: 'Course 3',
            faculty: 'faculty 3',
            tasks: [
                'task 12',
                'task 32',
            ]
        },
        
    ]

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