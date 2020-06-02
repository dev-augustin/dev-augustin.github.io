package com.rosy.SpringBootGiftStore.GiftStore.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rosy.SpringBootGiftStore.GiftStore.exception.ResourceNotFoundException;
import com.rosy.SpringBootGiftStore.GiftStore.model.CustomerDetail;
import com.rosy.SpringBootGiftStore.GiftStore.repository.CustomerDetailRepository;

@RestController
@RequestMapping("/rosy_api/v1")

public class CustomerDetailController {


	
  @Autowired
  private CustomerDetailRepository customerDetailRepository;

    
//  get all reserved rooms
  

  @GetMapping("/customer")
  public List<CustomerDetail> getAllCustomers(Model model) {
  	
  return this.customerDetailRepository.findAll();
  
}


    
//  get all customer by id

  @GetMapping("/customer/{id}")
  public ResponseEntity<CustomerDetail> getCustomerById(@PathVariable(value = "id") Long reservedRoomId)
      throws ResourceNotFoundException {
	  CustomerDetail reserveRoom = customerDetailRepository.findById(reservedRoomId)
        .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + reservedRoomId));
      return ResponseEntity.ok().body(reserveRoom);
  }
  
//  save customer
  
  @PostMapping("/customer")
  public CustomerDetail createCustomer(@Valid @RequestBody CustomerDetail reserveRoom) {
	  return customerDetailRepository.save(reserveRoom);
  }
  
//  Update customer
  
  @PutMapping("/customer/{id}")
  public ResponseEntity<CustomerDetail> updateCustomer(@PathVariable(value = "id") Long reservedRoomId,
		  @Valid @RequestBody CustomerDetail reservedRoomDetails)
	      throws ResourceNotFoundException {
	  CustomerDetail reserveRoom = customerDetailRepository.findById(reservedRoomId)
	    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + reservedRoomId));
	      
	     
	  reserveRoom.setEmail(reservedRoomDetails.getEmail()); 
	  reserveRoom.setfullName(reservedRoomDetails.getfullName());
	  reserveRoom.setAddress(reservedRoomDetails.getAddress());
	  reserveRoom.setPhone(reservedRoomDetails.getPhone()); 
	     
	     
	     final CustomerDetail updatedEmployee = customerDetailRepository.save(reserveRoom);
	     
	     
	     return ResponseEntity.ok(updatedEmployee);
	      
	      }
  
//  Delete reserved rooms
  
  @DeleteMapping("/customer/{id}")
  public Map<String, Boolean> deletedEmployee(@PathVariable(value = "id") Long reservedRoomId)
			      throws ResourceNotFoundException {
	  CustomerDetail employee = customerDetailRepository.findById(reservedRoomId)
			    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + reservedRoomId));
  
	  			  customerDetailRepository.delete(employee);
			      Map<String, Boolean> response = new HashMap<>();
			      
			      response.put("deleted reserved room", Boolean.TRUE);
			      
			      return response;
  
  }
  
  
}

