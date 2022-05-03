import React from 'react'
import './courseCard.css'

function CourseCard({course}) {
  return (
    <>
    <div className='card-container'>
        <div style={{
            // backgroundColor: '#25282B',
            color: '#4492E6',
            fontWeight: '900',
            fontSize: '2em',
            marginBottom: '1rem',
            
        }}>{course.name}</div>
        <div style={{color:'#aaa', marginBottom:'1rem'}}>{course.faculty}</div>
        {course.tasks.map((task)=>{
            return(
                <div key={task} style={{
                    color: '#fff',
                }}>{task}</div>
            )
        })}
    </div>
    </>
  )
}

export default CourseCard