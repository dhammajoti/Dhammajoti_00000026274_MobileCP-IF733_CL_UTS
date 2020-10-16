import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import {Product} from '../product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  loadedProduct: Product;
  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('id')){return;}
      const pId= paramMap.get('id');
      this.loadedProduct = this.productsService.getProduct(pId);
    });
  }

}
