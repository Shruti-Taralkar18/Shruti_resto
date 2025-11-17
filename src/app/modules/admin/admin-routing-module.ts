import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './admin-components/dashboard/dashboard';
import { AddCategory } from './admin-components/add-category/add-category';

const routes: Routes = [
  {path:"dashboard",
    component:Dashboard
  },
  {
    path:"category",
    component:AddCategory
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
