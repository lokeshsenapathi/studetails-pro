package backend.operastions.curdoperations.studentRepo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.operastions.curdoperations.entity.studentEntity;

@Repository
public interface studentRepo extends JpaRepository<studentEntity ,Long>{
  
    

}
