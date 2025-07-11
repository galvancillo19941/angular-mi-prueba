import { Component, Input  } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [NgOptimizedImage],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {
  @Input() products: any[] = [];
}
