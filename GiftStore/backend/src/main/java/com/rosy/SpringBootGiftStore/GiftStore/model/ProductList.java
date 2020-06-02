package com.rosy.SpringBootGiftStore.GiftStore.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "productList") 
public class ProductList {


@Id
@GeneratedValue
@Column(name = "order_id")
private long id;


@Column(name = "productId")
private String productId;

@Column(name = "productImage")
private String productImage;

@Column(name = "title")
private String title;

@Column(name = "category")
private String category;

@Column(name = "price")
private double price;



public ProductList() {
super();
}

public ProductList(String productId, String productImage, String title, 
		String category, double price) {
super();
this.productId = productId;
this.productImage = productImage;
this.title = title;
this.category = category;
this.price = price;


}

public long getId() {
return id;
}

public void setId(long id) {
this.id = id;
}

public String getProductId() {
return productId;
}

public void setProductId(String productId) {
this.productId = productId;
}

public String getProductImage() {
return productImage;
}

public void setProductImage(String productImage) {
this.productImage = productImage;
}


public String getTitle() {
return title;
}

public void setTitle(String title) {
this.title = title;
}

public double getPrice() {
return price;
}

public void setPrice(double price) {
this.price = price;
}

public String getCategory() {
return category;
}

public void setCategory(String category) {
this.category = category;
}
  

}

