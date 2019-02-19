import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {MicuentaComponent} from "./micuenta/micuenta.component";
import {HeaderComponent} from "./header/header.component";
import {AbcComponent} from "./abc/abc.component";

  
const Enrutamiento: Routes = [
  { path: "", redirectTo: "/Header", pathMatch: "full" },
  {path:'Prueba', component:AbcComponent},
  {path:"Header",component:HeaderComponent},
  { path:'Login', component: LoginComponent },
  {path:'Signup', component:SignupComponent},
  {path:'Micuenta', component:MicuentaComponent}
];

@NgModule({
 
  imports: [
    RouterModule.forRoot(Enrutamiento)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
