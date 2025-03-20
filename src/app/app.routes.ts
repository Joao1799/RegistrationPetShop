import { Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { RegisterPetComponent } from './components/body/registros/register-pet/register-pet.component';
import { RegisterServiceComponent } from './components/body/registros/register-service/register-service.component';
import { RegisterUserComponent } from './components/body/registros/register-user/register-user.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },  // Rota para o loginComponent
  { path: 'home', component: HomeComponent },  // Rota para o HomeComponent
  { path: 'registrarUsuario', component: RegisterUserComponent }, // Rota para RegistrarUser
  { path: 'registrarPet', component: RegisterPetComponent },       // Rota para RegistrarPet
  { path: 'registrarServico', component: RegisterServiceComponent }, // Rota para RegistrarService
];
