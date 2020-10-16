import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../home/products.service';
import { AlertController, ToastController } from '@ionic/angular';
import {Product} from '../home/product.model';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {
  loadedproducts : Product[];
  productId : string;
  constructor(private productsService : ProductsService,
              private router: Router,
              private alertCtrl: AlertController,
              private toastController : ToastController,) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.loadedproducts = this.productsService.getAllProducts();
  }
  async deletePdt(id:string){
    console.log(id);
    this.productsService.deleteProduct(id);
    this.loadedproducts = this.productsService.getAllProducts();
    const toast = await this.toastController.create({
      message: 'Product deleted.',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(id:string){

    const alert = await this.alertCtrl.create({
      header: 'Are you Sure?',
      message: 'Do you really want to delete this product?',
      buttons:[
        {
          text:'Cancel',
          role: 'cancel'
        },
        {
          text:'Delete',
          handler: ()=> this.deletePdt(id)
        }
      ]
    });
    await alert.present();
  }
  editProduct(pId){
    let navigationExtra : NavigationExtras ={state:{productId:pId}}
    this.router.navigate(['/adminpage/editproduct'],navigationExtra);
  }
}
