import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from '../../home/products.service';
import {NgForm} from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.page.html',
  styleUrls: ['./newproduct.page.scss'],
})
export class NewproductPage implements OnInit {

  constructor(private router: Router,
              private productsService:ProductsService,
              private alertCtrl: AlertController,
              private toastController : ToastController,) { }

  ngOnInit() {
  }

  async addPdt(form:NgForm){
     this.productsService.addProduct(form.value);
     this.router.navigate(['../adminpage']);
  
    const toast = await this.toastController.create({
      message: 'Product Added.',
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
          handler: ()=> this.addPdt(form)
        }
      ]
    });
    await alert.present();
  }

  onSubmit(form: NgForm){
    form.value.photoUrl = form.value.photoUrl.split(',');
    this.presentAlert(form);
  }
}
