import { Component, Input, SimpleChanges } from '@angular/core';
import { SlicePipe, CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-products',
  imports: [CommonModule, SlicePipe, SkeletonModule, DialogModule, ButtonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products {

  @Input() products: any[] = [];
  visible = false;
  visibleCart = true;
  productSelect: any = {};
  carts: any[] = [];

  showDialog(product: any) {
    this.visible = true
    this.productSelect = product
  }

  ngOnChanges(changes: SimpleChanges)  {

    const carts = JSON.parse(localStorage.getItem('carts') || '[]');

    if (changes['products']) {
      this.carts = carts
    }
  }

  addCart() {

      const yaExiste = this.carts.some(d => d.id === this.productSelect.id);

      if (!yaExiste) {
        this.carts.push({
          ...this.productSelect,
          quantities: 0
        })
      }

      this.carts.forEach(item => {

        if(item.id === this.productSelect.id) {
          item.quantities++
        }

      });

    this.visible = false;
    this.visibleCart = true;

    const serializedState = JSON.stringify(this.carts);
    localStorage.setItem('carts', serializedState);

  }

}
