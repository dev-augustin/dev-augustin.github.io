
package com.rosy.SpringBootGiftStore.GiftStore.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rosy.SpringBootGiftStore.GiftStore.model.FlowersList;
import com.rosy.SpringBootGiftStore.GiftStore.model.ProductList;

@Repository
public interface FlowerListRepository extends JpaRepository<FlowersList, Long>{

//	
//	 @Query("SELECT * from flowerList where title like  %?flower%")
//	List<FlowersList> findByTitle(String title);

}


