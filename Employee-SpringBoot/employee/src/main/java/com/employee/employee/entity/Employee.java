package com.employee.employee.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Employee {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="id")
private Long id;

@Column(name="name")
private String name;

@Column(name="email")
private String email;

@Column(name="phone")
private String phone;

@Column(name="department")
private String department;

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id=id;
}


public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPhone() {
	return phone;
}

public void setPhone(String phone) {
	this.phone = phone;
}

public String getDepartment() {
	return department;
}

public void setDepartment(String department) {
	this.department = department;
}


}
