import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of Product 1.',
      price: 19.99,
      category: 'Electronics',
      availability: 'Available',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Product 2 is a versatile item for your everyday needs.',
      price: 29.99,
      category: 'Home & Kitchen',
      availability: 'Available',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'A stylish and comfortable product.',
      price: 49.99,
      category: 'Fashion',
      availability: 'Available',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Product 4 is perfect for outdoor activities.',
      price: 39.99,
      category: 'Sports & Outdoors',
      availability: 'Unavailable',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Product 5 description goes here.',
      price: 59.99,
      category: 'Electronics',
      availability: 'Available',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Product 6 description goes here.',
      price: 9.99,
      category: 'Home & Kitchen',
      availability: 'Unavailable',
    },
  ];
}
