package com.rosy.SpringBootGiftStore.GiftStore.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rosy.SpringBootGiftStore.GiftStore.model.ContactForm;



@Repository
public interface ContactFormRepository extends JpaRepository<ContactForm, Long>{

}

