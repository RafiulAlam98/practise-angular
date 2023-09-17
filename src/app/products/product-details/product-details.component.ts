import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  productId: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProductService
  ) {}
  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.params['id'];

    console.log(this.service.products);
    this.product = this.service.products.filter(
      (item) => item?.id == this?.productId
    );
    console.log(this.product);
  }
}
