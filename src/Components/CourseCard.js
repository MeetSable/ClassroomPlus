import React from 'react'
import './styles/courseCard.css'
import { NavLink } from 'react-router-dom'

function CourseCard({course}) {
  return (
    <>
    <NavLink to={`/courses/${course.id}`} className='card-container shadow-dark'>
        <div style={{
            // backgroundColor: '#25282B',
            color: '#4492E6',
            fontWeight: '900',
            fontSize: '2em',
            marginBottom: '1rem',
            
        }}>{course.name}</div>
        <div style={{color:'#aaa', marginBottom:'1rem'}}>{course.faculty}</div>
        {course.tasks.map((x)=>{
            return(
                <div key={x.id} style={{
                    color: '#ffffffbf',
                }}>{x.task}</div>
            )
        })}
    </NavLink>
    </>
  )
}

export default CourseCard