import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Categories } from './components/categories/categories';
// import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Categories],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   title = 'mi-prueba';

   products: any[] = [];

  ngOnInit() {

    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      this.products = data
      console.log(data)
    })
    .catch(err => console.error(err));

  }


}
