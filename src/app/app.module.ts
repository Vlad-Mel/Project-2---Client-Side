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
import { ProfileAsideComponent } from './components/profile-aside/profile-aside.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { DropdownMenuComponent } from './components/utils/dropdown-menu/dropdown-menu.component';
import { FocusDirective } from './directives/focus.directive';
import { ProductBrowsingPageComponent } from './pages/product-browsing-page/product-browsing-page.component';
import { BrowseGridComponent } from './components/browse-grid/browse-grid.component';
import { BrowseSidebarComponent } from './components/browse-sidebar/browse-sidebar.component';
import { BrowseItemComponent } from './components/browse-item/browse-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    ModalComponent,
    LoginComponent,
    RegistrationComponent,
    ProfilePageComponent,
    ProfileAsideComponent,
    ProfileFormComponent,
    DropdownMenuComponent,
    FocusDirective,
    ProductBrowsingPageComponent,
    BrowseGridComponent,
    BrowseSidebarComponent,
    BrowseItemComponent,
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
