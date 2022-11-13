import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProductBrowsingPageComponent } from './pages/product-browsing-page/product-browsing-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'products', component: ProductBrowsingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
