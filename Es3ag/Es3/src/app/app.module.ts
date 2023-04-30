import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TdformComponent } from './tdform/tdform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MenuComponent } from './menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './menu/cart/cart.component';
import { MenuService } from './menu.service';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    TdformComponent,
    ReactiveformComponent,
    MenuComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [ MenuService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
