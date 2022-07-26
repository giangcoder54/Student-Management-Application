// import Footer from './Components/Footer';
import StudentComponent from './Components/StudentComponent';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddAndEdit from './Components/AddAndEditComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 
  return (
   <div>
     <Router>
      <Header/>

      <div className='body'>
      <Routes>
         <Route path='/' element={<StudentComponent/>}></Route> 
         <Route path='add-student' element={<AddAndEdit/>}></Route>
         <Route path='edit-student/:id' element={<AddAndEdit/>}></Route>
    </Routes>
      </div>
   
        
    
    
    </Router>
    <ToastContainer/>
   </div>
    

  );
}

export default App;
