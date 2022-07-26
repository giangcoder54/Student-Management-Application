
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {  toast } from 'react-toastify';
import StudentService from '../Services/StudentService';

function AddAndEdit(){
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const[gender,setGender]=useState('');
    const[email,setEmail]= useState('');
    const {id} = useParams();
    const emailStudents = StudentService.getStudent.email;
     // get inform by id
    
        useEffect(()=>{
            if(id){ StudentService.getStudentById(id).then((res)=>{
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setGender(res.data.gender);
                setEmail(res.data.email);
            }).catch((error)=>{
                console.log(error)
            }) }
           
          },[id]);
    
    
    // add and update student
  const UpdateOrSaveStudent =(e)=>{
    e.preventDefault();
    const student ={firstName,lastName,gender,email}
    if(id){
       
        
        StudentService.updateStudent(id,student).then((res)=>{
            
            navigate('/');
            toast("Update Successfully!!!")
            
        })
    }else{
     console.log(emailStudents)
   
    StudentService.createStudent(student).then((res)=>{
        navigate('/');
        toast("Create Student Successfully!!!")
    })
    }
  }

 
     
  const title=() =>{
        if(id){
            return <h1 id="title" className="text-center">{'Update Student '+id}</h1>
        }else{
             return<h1 id="title" className="text-center">Add New Student</h1>

             
        }
     }
     const button=()=>{
        if(id){
            return  <button className='button'  onClick={(e)=>{UpdateOrSaveStudent(e)}} >Update</button>
        }else{
            return <button className='button'  onClick={(e)=>{UpdateOrSaveStudent(e)}}>Submit</button>
        }
     }
     

    return(
        
        <div className='container'>
            <header className="header-form">
            {title()}
       
        </header>
        
        <form>
            <div className="form-group">
                <label id="firstname-label " htmlFor="lastname" >First Name</label>
                <input type="text" id=" firstname" required placeholder="Enter First Name" className="form-control" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
                <label id="lastname-label " htmlFor="lastname" >Last Name</label>
                <input type="text" id="lastname" required placeholder="Enter Last Name" className="form-control" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label id="gender-label " htmlFor="gender" >Gender</label>
                <input type="text" id="gender" required placeholder="Gender" className="form-control" value={gender} onChange={(e)=> setGender(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="email" id="email-label">Email</label>
                <input id="email" type="email" required placeholder="Enter Your Email" value={email} className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='submit-form'>
               {button()}
                <button  className='button'><Link to="/" className='cancel'>Cancel</Link></button>
            </div>
            </form>
        </div>
    )
}
export default AddAndEdit