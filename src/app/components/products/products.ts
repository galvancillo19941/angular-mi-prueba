import { Component, Input, } from '@angular/core';
import { SlicePipe, CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-products',
  imports: [CommonModule, SlicePipe, SkeletonModule  ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

  @Input() products: any[] = [];
}
