import {Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Product} from 'src/app/home/product.model';
import {ProductsService} from '../../home/products.service';
import {NgForm} from '@angular/forms';
import {AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.page.html',
  styleUrls: ['./editproduct.page.scss'],
})
export class EditproductPage implements OnInit {
  editForm: FormGroup;
  loadedProduct : Product;
  pId : string;
  constructor(private router:Router,
              private productsService:ProductsService,
              private alertCtrl: AlertController,
              private toastController : ToastController,) { 
                this.pId = this.router.getCurrentNavigation().extras.state.productId;
              }

  ngOnInit() {
    this.loadedProduct = this.productsService.getProduct(this.pId);
  }

  async editPdt(form:NgForm){
    console.log(this.pId);
    form.value.id=this.pId;
    form.value.jenis=this.loadedProduct.jenis;
    this.productsService.editProduct(form.value);
    this.router.navigate(['../adminpage']);
 
   const toast = await this.toastController.create({
     message: 'Product Edited.',
     duration: 2000
   });
   toast.present();
 }

 async presentAlert(form:NgForm){

   const alert = await this.alertCtrl.create({
     header: 'Are you Sure?',
     buttons:[
       {
         text:'Cancel',
         role: 'cancel'
       },
       {
         text:'Yes',
         handler: ()=> this.editPdt(form)
       }
     ]
   });
   await alert.present();
 }
  
  onSubmit(form: NgForm){
    this.presentAlert(form);
  }
  
}
