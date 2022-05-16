import React, {useState, useRef} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudyHall from './Components/StudyHall';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import CourseDashboard from './Components/CourseDashboard';
import Students from './Components/Students';
import FacultyBlock from './Components/FacultyBlock';
import AdminBlock from './Components/AdminBlock';
import {useOnClickOutside} from './hooks';
import './Components/styles/globalStyle.css'
import Blogs from './Components/Blogs';

export const Pages = [
  {
    id: 0,
    name: 'Study Hall',
    path: '/',
    element: <StudyHall/>,
  },
  {
    id: 1,
    name: 'Faculty Block',
    path: '/facultyblock',
    element: <FacultyBlock/>,
  },
  {
    id: 2,
    name: 'Admin Block',
    path: '/adminblock',
    element: <AdminBlock/>,
  },
  {
    id:3,
    name: 'Students',
    path: '/students',
    element: <Students/>,
  },
  {
    id:4,
    name:'Blogs',
    path:'/blogs',
    element: <Blogs/>,
  },
]

const routeItem = (i)=>{
  return(
    <Route path={i.path} element={i.element} key={i.id}></Route>
  )
}

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId= "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <Router>
      <div ref={node}>
      <NavBar open={open} setOpen={setOpen} aria-controls={menuId}/>
      <SideBar open={open} id={menuId}/>
      </div>
        <Routes>
          {Pages.map(routeItem)}
          <Route path='courses/:id' element={<CourseDashboard/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
