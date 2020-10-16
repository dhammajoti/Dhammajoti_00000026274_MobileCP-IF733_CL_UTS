import { Injectable } from '@angular/core';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private products: Product[]=[
    {
      id: 'p1',
      name : 'Prosesor Intel® Core™ i5-8600T',
      photoUrl:['https://static.bmdstatic.com/pk/product/medium/5c87500697ed1.jpg','https://www.alternate.co.uk/p/1200x630/h/Intel__Core_i5_8600_processor_3_1_GHz_9_MB_Smart_Cache@@hn5i06.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Intel_Core_i5-2500k_7755.jpg/440px-Intel_Core_i5-2500k_7755.jpg'],
      price: 3195000,
      stock: 50,
      jenis :"CPU",
      model:"i5-8600T",
      baseClock:"2.30 GHz",
      boostClock: "3.70 GHz",
      jumlahcore: 6,
      thread: 4
    },
    {
      id: 'p2',
      name : 'CORSAIR VENGEANCE RGB PRO',
      photoUrl:['https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/10/9126088/9126088_d7bb156a-72e1-4475-b672-8f0dd80009d5_700_700.jpg','https://dinopc.imgix.net/catalog/product/cache/f4c70c3375db8d70bb1f98755c13ce7d/d/p/dpcmem-025_2.jpg'],
      price: 1419000,
      stock: 30,
      jenis :"RAM",
      model:"CMW16GX4M2A2666C16",
      speed: "2666MHz",
      ukuran: "16GB Kit (2 x 8GB)"

    },
    {
      id: 'p3',
      name : 'Colorful iGame GTX 1660 ULTRA',
      photoUrl:['https://img.tek.id/img/content/2019/03/14/13993/colorful-luncurkan-gpu-gtx-1660-dibanderol-rp3-jutaan-gWi0cJu3bC.jpg','https://tpucdn.com/review/colorful-igame-gtx-1660-ultra/images/title.jpg','https://cdn.medcom.id/dynamic/content/2019/03/18/999989/jDypC0A5PG.jpg?w=1024'],
      price: 3480000,
      stock: 45,
      model:"GTX 1660",
      jenis :"GPU"
    },
    {
      id: 'p4',
      name : 'MSI LGA1151 Gaming M3 H170',
      photoUrl:['https://static.bmdstatic.com/pk/product/medium/MSI-Motherboard-Socket-LGA1151-Gaming-M3-Z170--SKU14316319-2016122143550.jpg','https://a0.amlimg.com/NzNkNGRlNWY1ZTJkYWI5Zjg2YWRmNjcyNjVkODlmZGKiCMmlDD5-N8z91rIZl9xBaHR0cDovL21lZGlhLmFkc2ltZy5jb20vNDYyYjljYTYwNzNiNjJiZDI0YWQzZTJiZGE1MmVhZDAzYmQzMjhmNzNkYjY5ZjFhOWUwMWNhOWE4MTJkMDRlYy5qcGd8fHx8fHw3MDB4NTA5fGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg'],
      price: 2249000,
      stock: 40,
      model:"LGA1151",
      jenis :"Motherboard",
      chipset:"Intel® H170",
      fitprosesor:"i5"
    },
    {
      id: 'p5',
      name : 'Core i9-9900K',
      photoUrl:['https://ecs7.tokopedia.net/img/cache/700/product-1/2018/10/16/314325/314325_7e213e49-1642-4f4a-97c8-28a5a1c7e56b_700_700.jpg','https://static.turbosquid.com/Preview/2019/08/07__16_59_35/IntelCorei99900kCPUc4dmodel001.jpg49A40C53-2C37-4537-91AE-D2C88C6C5B03Large.jpg'],
      price: 3195000,
      stock: 50,
      jenis :"CPU",
      model:"i9-9900K",
      baseClock:"3.6 GHz",
      boostClock: "5.0 GHz",
      jumlahcore: 8,
      thread: 16
    }
  ];
  constructor() { }
  getAllProducts(){
    return [...this.products];
  }
  getProduct(id: string){
    return{...this.products.find(product=>{return product.id===id;
    })};
  }
  deleteProduct(id: string){
    console.log("get",id);
    this.products = this.products.filter(product=>{
      return product.id !==id;
    });
  }
  addProduct(form: Product){
    var tempId;
    for(var i=0;i<this.products.length;i++){
      tempId = Math.floor((Math.random() * 1000) + 1);
      tempId = "p"+tempId;
      console.log("id temp",tempId);
      if(this.products[i].id!==tempId){
        form.id=tempId;
        this.products.push(form);
        break;
      }
    }
    
  }
  editProduct(form:Product){
    for(var i=0;i<this.products.length;i++){
      console.log(this.products[i]);
      if(this.products[i].id===form.id){
        this.products[i]=form;
      }
    }
    
  }

  // addProduct(id:string,name:string,photoUrl:string,price:number,stock:number){
  //   this.products.push({id:id,name:name,photoUrl:photoUrl,price:price,stock:stock});
  // }
  // editProduct(pid:string,id:string,name:string,photoUrl:string,price:number,stock:number){
  //   console.log(pid,id,name,photoUrl,price,stock);
  //   this.products.find(product=> {if(product.id===pid){product.id=id;product.name=name;product.photoUrl=photoUrl;product.price=price;product.stock=stock;
  //     console.log(product.id,product.name,product.photoUrl,product.price,product.stock)}});
    
  // }
  
}
