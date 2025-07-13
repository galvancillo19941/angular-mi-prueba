import { Component, Input, } from '@angular/core';
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
  visible = false
  productSelect: any = {};

  showDialog(product: any) {
    this.visible = true
    this.productSelect = product
  }

}
