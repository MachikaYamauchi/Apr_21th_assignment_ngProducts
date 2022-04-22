import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { TopnavComponent } from './topnav/topnav.component';

const routes: Routes = [
  {path:"topnav", component:TopnavComponent},
  {path:"products", component:ProductsComponent},
  {path:"contact", component:ContactComponent},
  {path:"aboutUs", component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
