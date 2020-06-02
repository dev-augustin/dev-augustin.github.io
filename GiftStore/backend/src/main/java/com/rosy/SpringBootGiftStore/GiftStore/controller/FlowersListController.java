
package com.rosy.SpringBootGiftStore.GiftStore.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import com.rosy.SpringBootGiftStore.GiftStore.model.CustomerOrder;
import com.rosy.SpringBootGiftStore.GiftStore.model.FlowersList;
import com.rosy.SpringBootGiftStore.GiftStore.repository.CustomerOrderRepository;
import com.rosy.SpringBootGiftStore.GiftStore.repository.FlowerListRepository;


@RestController
@RequestMapping("/rosy_api/v1")

public class FlowersListController {
	
	@Autowired
	private FlowerListRepository flowerListRepository;

    
//  get all orders
  

  @GetMapping("/flowers")
  public List<FlowersList> getAllEmployees(Model model) {
  	
  return this.flowerListRepository.findAll();
  
}

    
//  get all products by id

  @GetMapping("/flowers/{id}")
  public ResponseEntity<FlowersList> getOrderById(@PathVariable(value = "id") Long orderId)
      throws ResourceNotFoundException {
	  FlowersList customerOrder = flowerListRepository.findById(orderId)
        .orElseThrow(() -> new ResourceNotFoundException("Order not found for this id :: " + orderId));
      return ResponseEntity.ok().body(customerOrder);
  }
  
  
//  @GetMapping("/flowers/search")
//  public ResponseEntityF<>lowersList> finflower(@PathVariable(value = "category") String titles)
//      throws ResourceNotFoundException {
//	  List<CustomerOrder> customerOrder = ((List<CustomerOrder>) customerOrderRepository.findByCategory(category));
////        .orElseThrow(() -> new ResourceNotFoundException("Order not found for this id :: " + orderId));
//      return ResponseEntity.ok().body(customerOrder);
//  }
//  save employee
  
  @PostMapping("/flowers")
  public FlowersList createOrder(@Valid @RequestBody FlowersList customerOrder) {
	  return flowerListRepository.save(customerOrder);
  }
  
//  Update Order
  
  @PutMapping("/flowers/{id}")
  public ResponseEntity<FlowersList> updateOrder(@PathVariable(value = "id") Long orderId,
		  @Valid @RequestBody FlowersList customerOrderDetails)
	      throws ResourceNotFoundException {
	  FlowersList customerOrder = flowerListRepository.findById(orderId)
	    		  .orElseThrow(()-> new ResourceNotFoundException("updatedOrder not found for this id :: " + orderId));
	      
	     
	  customerOrder.setProductId(customerOrderDetails.getProductId()); 
	  customerOrder.setProductImage(customerOrderDetails.getProductImage());
	  customerOrder.setTitle(customerOrderDetails.getTitle());
	  customerOrder.setPrice(customerOrderDetails.getPrice());
	  customerOrder.setCategory(customerOrderDetails.getCategory());
	     
	     
	     final FlowersList updatedOrder = flowerListRepository.save(customerOrder);
	     
	     
	     return ResponseEntity.ok(updatedOrder);
	      
	      }
  
//  Delete Order
  
  @DeleteMapping("/flowers/{id}")
  public Map<String, Boolean> deletedOrder(@PathVariable(value = "id") Long orderId)
			      throws ResourceNotFoundException {
	  FlowersList customerOrder = flowerListRepository.findById(orderId)
			    		  .orElseThrow(()-> new ResourceNotFoundException("customerOrder not found for this id :: " + orderId));
  
	  flowerListRepository.delete(customerOrder);
			      Map<String, Boolean> response = new HashMap<>();
			      
			      response.put("deleted customerOrder", Boolean.TRUE);
			      
			      return response;
  
  }
  
  
}




