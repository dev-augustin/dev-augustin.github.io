package com.rosy.SpringBootGiftStore.GiftStore.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rosy.SpringBootGiftStore.GiftStore.model.CustomerOrder;

@Repository
public interface CustomerOrderRepository extends JpaRepository<CustomerOrder, Long>{

	
//	 @Query("SELECT * from CUSTOMER_ORDER WHERE category = 'Flowers'")
//	List<CustomerOrder> findByCategory(String category);

}


