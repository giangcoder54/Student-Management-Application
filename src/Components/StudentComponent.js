import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AddAndEdit from './AddAndEditComponent';
import StudentService from '../Services/StudentService';
import {  toast } from 'react-toastify';



export default function StudentComponent() {
    
    
    const[students,setStudents]= useState([]);
  
    
    
    useEffect(() =>{
        getStudents()
    },[]);
   

    // list students
    const getStudents =() =>{
        StudentService.getStudent().then((response) =>{
            setStudents(response.data)
            
        }

        ).catch(error =>{
            console.log(error);
        });
    }
    // delete student
    const deleteStudent=(id)=>{
        StudentService.deleteStudent(id).then((response)=>{
            getStudents();
        }).catch(error =>{
            console.log(error)
        })
    }
   

   
  return (
    <div className='container'>
      
        <Link to="/add-student"  className='adding'>Add Student</Link>
        
        <table className='table'>
            <thead>
                <tr className='row title-col' >
                    <th  className='col col-6'>Student Id</th>
                    <th className='col col-6'>First Name</th>
                    <th className='col col-6'>Last Name</th>
                    <th className='col col-6'>Gender</th>
                    <th className='col col-6'>Email</th>
                    <th className='col col-6'></th>

                </tr>
            </thead>
            <tbody>
                {
                    students.map( student=>
                                <tr className='row' key={student.id} >
                                    <td className='col-6'>{student.id}</td>
                                    <td className='col-6'>{student.firstName}</td>
                                    <td className='col-6'>{student.lastName}</td>
                                    <td className='col-6'>{student.gender}</td>
                                    <td className='col-6'>{student.email}</td>
                                    <td className='col-6'>
                                        <button className='button update' type='submit' ><Link to={`/edit-student/${student.id}`} className='update' >Update</Link></button>
                                        <button className='button delete'  type='submit' onClick={(id)=>{ deleteStudent(student.id)
                                                                                            toast("Delete Successfully!")}}>Delete </button>
                                    
                                    </td>
                                </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
