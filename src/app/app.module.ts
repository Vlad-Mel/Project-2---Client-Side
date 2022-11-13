import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ModalComponent } from './components/utils/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './states/auth/auth.reducer';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileFormComponent } from './components/profile/profile-form/profile-form.component';
import { DropdownMenuComponent } from './components/utils/dropdown-menu/dropdown-menu.component';
import { FocusDirective } from './directives/focus.directive';
import { ProfileNavigationComponent } from './components/profile/profile-navigation/profile-navigation.component';
import { PrivacyPolicyComponent } from './components/profile/privacy-policy/privacy-policy.component';
import { SecuritySettingsComponent } from './components/profile/security-settings/security-settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { MethodsOfPaymentComponent } from './components/profile/methods-of-payment/methods-of-payment.component';
import { ShippingDetailsComponent } from './components/profile/shipping-details/shipping-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    ModalComponent,
    LoginComponent,
    RegistrationComponent,
    ProfilePageComponent,
    ProfileFormComponent,
    DropdownMenuComponent,
    FocusDirective,
    ProfileNavigationComponent,
    PrivacyPolicyComponent,
    SecuritySettingsComponent,
    FooterComponent,
    MethodsOfPaymentComponent,
    ShippingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ auth: authReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
