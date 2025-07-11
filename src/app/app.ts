import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Categories } from './components/categories/categories';
// import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   title = 'mi-prueba';
}
