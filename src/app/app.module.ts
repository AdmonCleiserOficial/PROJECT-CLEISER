import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {} from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { PasswordModule } from "primeng/password";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AppRoutingModule } from "./app-routing.module";
import { MicuentaComponent } from "./micuenta/micuenta.component";
import { SegheaderComponent } from "./segheader/segheader.component";
import { AbcComponent } from "./abc/abc.component";
import { HomeComponent } from "./home/home.component";
import { SliderComponent } from "./slider/slider.component";
import { RevolutionsliderComponent } from "./revolutionslider/revolutionslider.component";
import { CabezaComponent } from './cabeza/cabeza.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    MicuentaComponent,
    SegheaderComponent,
    AbcComponent,
    HomeComponent,
    SliderComponent,
    RevolutionsliderComponent,
    CabezaComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PasswordModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
