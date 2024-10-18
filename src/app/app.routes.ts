import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterPetComponent } from './components/register-pet/register-pet.component';
import { RegisterServiceComponent } from './components/register-service/register-service.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },  // Rota para o HomeComponent
  { path: 'registrarUsuario', component: RegisterUserComponent }, // Rota para RegistrarUser
  { path: 'registrarPet', component: RegisterPetComponent },       // Rota para RegistrarPet
  { path: 'registrarServico', component: RegisterServiceComponent }, // Rota para RegistrarService
];
