import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpagePage } from './adminpage.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpagePage
  },
  {
    path: 'newproduct',
    loadChildren: () => import('./newproduct/newproduct.module').then( m => m.NewproductPageModule)
  },
  {
    path: 'editproduct',
    loadChildren: () => import('./editproduct/editproduct.module').then( m => m.EditproductPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpagePageRoutingModule {}
