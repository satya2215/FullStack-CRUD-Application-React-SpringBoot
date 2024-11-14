package com.employee.employee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.employee.employee.entity.Employee;
import com.employee.employee.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class EmployeeService {

	private final EmployeeRepository employeeRepository;
	
	public EmployeeService(EmployeeRepository employeeRepository) {
		this.employeeRepository=employeeRepository;
	}
	//save employee from react app
	public Employee postEmployee(Employee emp) {
		return employeeRepository.save(emp);
	}
	
	// get all employees from the database
	public List<Employee> getallEmployees(){
		return employeeRepository.findAll();
	}
	
	//delete employee by id
	public void deleteEmployee(Long id) {
		if(!employeeRepository.existsById(id)) {
			throw new EntityNotFoundException("Employee with id" + id + "not found");
		}
		employeeRepository.deleteById(id);
	}
	
	// get employee by id 
	public Employee getEmpolyeeById(Long id) {
		return employeeRepository.findById(id).orElse(null);
	}
	
	//update employee based on id
	public Employee updateEmployee(Long id,Employee employee) {
		Optional<Employee> optionalEmployee= employeeRepository.findById(id);
		
		if(optionalEmployee.isPresent()) {
			Employee existEmp=optionalEmployee.get();
			
			existEmp.setEmail(employee.getEmail());
			existEmp.setName(employee.getName());
			existEmp.setPhone(employee.getPhone());
			existEmp.setDepartment(employee.getDepartment());
			return employeeRepository.save(existEmp);
		}
		return null;
	}
	
	
}
