import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu'; 
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TabsCatalogComponent } from './component/tabs-catalog/tabs-catalog.component';
import { CardComponent } from './component/card/card.component';
import { BrendCatalogComponent } from './component/brend-catalog/brend-catalog.component';
import { CardCarouselComponent } from './component/card-carousel/card-carousel.component';
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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    IvyCarouselModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
