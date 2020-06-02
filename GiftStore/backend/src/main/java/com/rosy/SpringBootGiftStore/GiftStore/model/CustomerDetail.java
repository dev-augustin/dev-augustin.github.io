package com.rosy.SpringBootGiftStore.GiftStore.model;


import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "customerDetail") 
public class CustomerDetail {


@Id
@GeneratedValue
@Column(name = "cust_id")
private long id;


@Column(name = "fullName")
private String fullName;

@Column(name = "email")
private String email;

@Column(name = "phone")
private long phone;

@Column(name = "address")
private String address;


public CustomerDetail() {
super();
}

public CustomerDetail(String fullName, String email, long phone, String address) {
super();
this.fullName = fullName;
this.phone = phone;
this.email = email;
this.address = address;
}

public long getId() {
return id;
}

public void setId(long id) {
this.id = id;
}


public String getfullName() {
return fullName;
}

public void setfullName(String fullName) {
this.fullName = fullName;
}


public String getEmail() {
return email;
}

public void setEmail(String email) {
this.email = email;
}

public long getPhone() {
return phone;
}

public void setPhone(long phone) {
this.phone = phone;
}

public String getAddress() {
return address;
}

public void setAddress(String address) {
this.address = address;
}

}