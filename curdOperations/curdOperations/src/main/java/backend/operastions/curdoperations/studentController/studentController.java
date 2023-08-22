package backend.operastions.curdoperations.studentController;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import backend.operastions.curdoperations.entity.studentEntity;
import backend.operastions.curdoperations.studentRepo.studentRepo;

import java.util.List;


@RestController
@CrossOrigin
public class studentController {

	@Autowired
	studentRepo StudentRepo;
	  @PostMapping("/api")
      public ResponseEntity<studentEntity> saveStudent(@RequestBody studentEntity student){
		  return new ResponseEntity<>(StudentRepo.save(student), HttpStatus.CREATED);

      }
	  
	  @GetMapping("/api/students")
	  public ResponseEntity<List<studentEntity>>getStudents(){
		  return new ResponseEntity<>(StudentRepo.findAll(),HttpStatus.OK);
	  }
    
	@GetMapping("/api/students/{id}")
    public studentEntity getStudent(@PathVariable Long id) {
        studentEntity student = StudentRepo.findById(id).orElse(null);
        return student;
    }
  
	// @GetMapping("/api/student/{studentName}")
    // public ResponseEntity<studentEntity> getStudentByName(@PathVariable String studentName) {
    //     studentEntity student = StudentRepo.findByName(studentName);
	// }

}
