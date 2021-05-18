import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu'; 
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TabsCatalogComponent } from './component/tabs-catalog/tabs-catalog.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './component/card/card.component';
import { BrendCatalogComponent } from './component/brend-catalog/brend-catalog.component';
import { CardCarouselComponent } from './component/card-carousel/card-carousel.component';
import { from } from 'rxjs';
import { DwLoginComponent } from './component/dialog/dw-login/dw-login.component';
import { MainComponent } from './component/layouts/main/main.component';
import { CabinetComponent } from './component/layouts/cabinet/cabinet.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabsCatalogComponent,
    CardComponent,
    BrendCatalogComponent,
    CardCarouselComponent,
    DwLoginComponent,
    MainComponent,
    CabinetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    IvyCarouselModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
