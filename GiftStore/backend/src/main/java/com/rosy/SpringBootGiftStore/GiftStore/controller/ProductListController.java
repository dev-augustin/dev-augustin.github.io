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

import com.rosy.SpringBootGiftStore.GiftStore.model.ProductList;

import com.rosy.SpringBootGiftStore.GiftStore.repository.ProductListRepository;


@RestController
@RequestMapping("/rosy_api/v1")

public class ProductListController {
	
	@Autowired
	private ProductListRepository productListRepository;

    
//  get all orders
  

  @GetMapping("/products")
  public List<ProductList> getAllEmployees(Model model) {
  	
  return this.productListRepository.findAll();
  
}

    
//  get all products by id

  @GetMapping("/products/{id}")
  public ResponseEntity<ProductList> getOrderById(@PathVariable(value = "id") Long orderId)
      throws ResourceNotFoundException {
	  ProductList customerOrder = productListRepository.findById(orderId)
        .orElseThrow(() -> new ResourceNotFoundException("Order not found for this id :: " + orderId));
      return ResponseEntity.ok().body(customerOrder);
  }
  
//  @GetMapping("/products/category/{category}")
//  public List<ProductList> getByCategory(Model model) {
//  	
//  return this.productListRepository.findByCategory();
//  
//}
//  @GetMapping("/orders/{category}")
//  public ResponseEntity<List<CustomerOrder>> getOrderById(@PathVariable(value = "category") String category)
//      throws ResourceNotFoundException {
//	  List<CustomerOrder> customerOrder = ((List<CustomerOrder>) customerOrderRepository.findByCategory(category));
////        .orElseThrow(() -> new ResourceNotFoundException("Order not found for this id :: " + orderId));
//      return ResponseEntity.ok().body(customerOrder);
//  }
//  save employee
  
  @PostMapping("/products")
  public ProductList createOrder(@Valid @RequestBody ProductList customerOrder) {
	  return productListRepository.save(customerOrder);
  }
  
//  Update Order
  
  @PutMapping("/products/{id}")
  public ResponseEntity<ProductList> updateOrder(@PathVariable(value = "id") Long orderId,
		  @Valid @RequestBody ProductList customerOrderDetails)
	      throws ResourceNotFoundException {
	  ProductList customerOrder = productListRepository.findById(orderId)
	    		  .orElseThrow(()-> new ResourceNotFoundException("updatedOrder not found for this id :: " + orderId));
	      
	     
	  customerOrder.setProductId(customerOrderDetails.getProductId()); 
	  customerOrder.setProductImage(customerOrderDetails.getProductImage());
	  customerOrder.setTitle(customerOrderDetails.getTitle());
	  customerOrder.setPrice(customerOrderDetails.getPrice());
	  customerOrder.setCategory(customerOrderDetails.getCategory());
	     
	     
	     final ProductList updatedOrder = productListRepository.save(customerOrder);
	     
	     
	     return ResponseEntity.ok(updatedOrder);
	      
	      }
  
//  Delete Order
  
  @DeleteMapping("/products/{id}")
  public Map<String, Boolean> deletedOrder(@PathVariable(value = "id") Long orderId)
			      throws ResourceNotFoundException {
	  ProductList customerOrder = productListRepository.findById(orderId)
			    		  .orElseThrow(()-> new ResourceNotFoundException("customerOrder not found for this id :: " + orderId));
  
	  productListRepository.delete(customerOrder);
			      Map<String, Boolean> response = new HashMap<>();
			      
			      response.put("deleted customerOrder", Boolean.TRUE);
			      
			      return response;
  
  }
  
  
}




