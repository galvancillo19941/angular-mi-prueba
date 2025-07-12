import { Component, Input, SimpleChanges  } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';


@Component({
  selector: 'app-categories',
  imports: [SkeletonModule],
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
