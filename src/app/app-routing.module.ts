import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethodsOfPaymentComponent } from './components/profile/methods-of-payment/methods-of-payment.component';
import { PrivacyPolicyComponent } from './components/profile/privacy-policy/privacy-policy.component';
import { SecuritySettingsComponent } from './components/profile/security-settings/security-settings.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProductBrowsingPageComponent } from './pages/product-browsing-page/product-browsing-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'products', component: ProductBrowsingPageComponent},
  { path: 'profile', 
    component: ProfilePageComponent,
    canActivate: [AuthGuard], 
    children: [
      { path: 'privacy-policy', component: PrivacyPolicyComponent},
      { path: 'security-settings', component: SecuritySettingsComponent},
      { path: 'methods-of-payment', component: MethodsOfPaymentComponent},
      { path: 'shipping-details', component: MethodsOfPaymentComponent}
    ]},

  {path: 'checkout', component: CheckoutPageComponent},
  { path: 'search', component: SearchPageComponent},
  { path: 'cart', component: CartPageComponent, canActivate: [AuthGuard]},
  { path: 'product/:id', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
