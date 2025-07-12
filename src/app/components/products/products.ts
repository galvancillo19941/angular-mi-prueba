import { Component, Input, } from '@angular/core';
import { SlicePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule, SlicePipe  ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

  @Input() products: any[] = [];
}
