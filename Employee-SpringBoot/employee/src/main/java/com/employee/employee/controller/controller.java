package com.employee.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.employee.entity.Employee;
import com.employee.employee.service.EmployeeService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class controller {
	
	private final EmployeeService empService;
	
    public controller(EmployeeService empService) {
        this.empService = empService;
    }
	
    // send employee data to database
	@PostMapping("/employee")
	public Employee postEmployee(@RequestBody Employee emp) {
		//pass the emp details  to service method for store in database
		return empService.postEmployee(emp);
	}
	
	// get all employee data from database
	@GetMapping("/employees")
	public List<Employee> getallEmployees(){
		return empService.getallEmployees();
	}
	
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
	try {
		// pass the id to the service method 
		empService.deleteEmployee(id);
		return new ResponseEntity<>("Employee with ID "+ id +"deleted successfully",HttpStatus.OK );
	}
	catch(EntityNotFoundException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
	}
	}
	@GetMapping("/employee/{id}")
	public ResponseEntity<?> getEmployeeById(@PathVariable Long id){
		Employee emp=empService.getEmpolyeeById(id);
		if(emp==null)return ResponseEntity.notFound().build();
		return ResponseEntity.ok(emp);
	}
	
	@CrossOrigin(origins = "http://localhost:5173")
	@PatchMapping("/employee/{id}")
	public ResponseEntity<?> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
		Employee updatedEmp=empService.updateEmployee(id, employee);
		if(updatedEmp == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		return ResponseEntity.ok(updatedEmp);
	}
	
}
