import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

  products: any[] = [];

  ngOnInit() {

    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      this.products = data
    })
    .catch(err => console.error(err));

  }


}
