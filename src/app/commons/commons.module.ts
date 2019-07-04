import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent, HomeComponent, NotFoundComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, HeaderComponent, HomeComponent, NotFoundComponent, FooterComponent]
})
export class CommonsModule { }
