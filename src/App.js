import React, {useState, useRef} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudyHall from './Components/StudyHall';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Students from './Components/Students';
import FacultyBlock from './Components/FacultyBlock';
import AdminBlock from './Components/AdminBlock';
import {useOnClickOutside} from './hooks';

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
          <Route path='/' element={<StudyHall/>}></Route>
          <Route path='/facultyblock' element={<FacultyBlock/>}></Route>
          <Route path='/adminblock' element={<AdminBlock/>}></Route>
          <Route path='/students' element={<Students/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
