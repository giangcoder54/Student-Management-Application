import axios from "axios";


class StudentService{
    getStudent(){
        return axios.get('http://localhost:8080/lists' );
    }
    getStudentById(id){
      return axios.get('http://localhost:8080/get/'+id);
    }
    deleteStudent(id){
       return axios.delete('http://localhost:8080/delete/'+id);
    }
    updateStudent(id, student){
      return  axios.put('http://localhost:8080/update/'+id,student);
    }
    createStudent(student){
            return axios.post('http://localhost:8080/add',student);
            
    }
}
export default new StudentService();