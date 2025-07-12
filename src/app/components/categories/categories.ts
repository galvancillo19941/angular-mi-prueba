import { Component, Input, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {
  @Input() products: any[] = [];

  categories: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {

     this.products.forEach(item => {
      const yaExiste = this.categories.some(d => d.category === item.category);
      if (!yaExiste) {
        this.categories.push(item);
      }
    });
    }
  }

}
