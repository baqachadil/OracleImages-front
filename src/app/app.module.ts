import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProdsComponent } from './Components/list-prods/list-prods.component';
import { MatTableModule, MatIconModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatListModule, MatTabsModule, MatExpansionModule, MatButtonModule, MatRippleModule, MatMenuModule, MatOptionModule, MatSortModule, MatCardModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CompareComponent } from './Components/compare/compare.component';
import { RechercheComponent } from './Components/recherche/recherche.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListProdsComponent,
    NavbarComponent,
    CompareComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,                
    MatListModule ,
    MatTabsModule,
    BrowserAnimationsModule,    
    BrowserAnimationsModule,   
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatTabsModule,
    NgbModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
