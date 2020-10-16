import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {Product} from './product.model';
import {ModalController} from '@ionic/angular';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  gridView: boolean;
  loadedproducts: Product[];
  constructor(private productsService: ProductsService,
    ) {}

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.loadedproducts = this.productsService.getAllProducts();
    this.gridView= true;
  }
  changeGrid(){
    this.gridView = !this.gridView;
  }
}
