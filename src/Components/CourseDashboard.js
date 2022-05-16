import React from 'react'
import { useParams } from 'react-router-dom'
import './styles/CourseDashboard.css'
import { courseList, coursePosts } from './tempData';

const post = (x) => {
  return(
    <div key={x.id} className="post-item-container shadow-dark">
    <div style={{
      color: '#4492E6',
      fontSize: '1.5rem',
    }}>{x.author}</div>
    {x.postedOn}
    <div style={{
      padding: '1rem 0 1.5rem 0.5rem',
      color: '#fff'
    }}>
      {x.text}
    </div>
    </div>
  )
};

function CourseDashboard() {
  const {id} = useParams();
  const course = courseList.find(course=>course.id===id);
  const posts = coursePosts.filter((x)=>{return x.courseId === id});
  return (
    <>
    <div className='main'>
      <div className='grid-container'>
        <div className='title shadow-dark-without-hover'>
          <div style={{
            color:'#4492E6',
            fontSize:'3rem',
            paddingLeft:'2rem',
            fontWeight: '600',
          }}>
            {course.name}
          </div>
        </div>
        <div className='tasks-container shadow-dark-without-hover'>
          <div className='tasks'>Tasks</div>
          {course.tasks.map((x)=>{
            return(
              <div className='task-list-item' key={x.id}>{x.task}</div>
            )
          })}
        </div>
        <div className='posts'>
          {posts.map(post)}
        </div>
      </div>
    </div>
    </>
  )
}

export default CourseDashboard