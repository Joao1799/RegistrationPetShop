import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { homeServices } from './home.service';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule,CommonModule,RippleModule,ButtonModule,MenubarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [homeServices],
})
export class HomeComponent {
  users: any;
  pets: any;
  items:  MenuItem[] | undefined;

  constructor(private homeServices: homeServices,private router: Router){};

  ngOnInit() {
    this.getUsers(); 
    this.menuBar();

    this.users = [
      {
        ownerName:"joao",
        email:"joaovictor@gmail.com",
        atendimentos:true,
        id:"123",
      },
      {
        ownerName:"pedro",
        email:"jpedrovictor@gmail.com",
        atendimentos:true,
        id:"1534",
      },
      {
        ownerName:"carlos",
        email:"123r@gmail.com",
        atendimentos:true,
        id:"1321",
      },      {
        ownerName:"jota",
        email:"jota@gmail.com",
        atendimentos:true,
        id:"1234",
      },
      {
        ownerName:"joao",
        email:"joaovictor@gmail.com",
        atendimentos:true,
        id:"1666",
      },      {
        ownerName:"joao",
        email:"joaovictor@gmail.com",
        atendimentos:true,
        id:"123",
      },
      {
        ownerName:"pedro",
        email:"jpedrovictor@gmail.com",
        atendimentos:true,
        id:"1534",
      },
      {
        ownerName:"carlos",
        email:"123r@gmail.com",
        atendimentos:true,
        id:"1321",
      },      {
        ownerName:"jota",
        email:"jota@gmail.com",
        atendimentos:true,
        id:"1234",
      },
      {
        ownerName:"joao",
        email:"joaovictor@gmail.com",
        atendimentos:true,
        id:"1666",
      },      {
        ownerName:"joao",
        email:"joaovictor@gmail.com",
        atendimentos:true,
        id:"123",
      },
      {
        ownerName:"pedro",
        email:"jpedrovictor@gmail.com",
        atendimentos:true,
        id:"1534",
      },
      {
        ownerName:"carlos",
        email:"123r@gmail.com",
        atendimentos:true,
        id:"1321",
      },      {
        ownerName:"jota",
        email:"jota@gmail.com",
        atendimentos:true,
        id:"1234",
      },
      {
        ownerName:"joao",
        email:"joaovictor@gmail.com",
        atendimentos:true,
        id:"1666",
      }
    ]
  }

  getUsers(){
    this.homeServices.getUsers().subscribe((users)=> {
      // this.users = users;
      console.log(this.users)
    })
  }

  menuBar(){
    this.items = [
      {
          label: 'Home',
          icon: 'fa fa-user',
          routerLink: '/home'
      },
      {
          label: 'Atendimentos',
          icon: 'pi pi-calendar',
          items: [
              {
                  label: 'Consulta',
                  icon: 'fa fa-notes-medical',
              },
              {
                  label: 'Vacinação',
                  icon: 'fa fa-syringe'
              },
              {
                  label: 'Retorno',
                  icon: 'fa fa-rotate-left'
              },
          ]
      },
      {
        label: 'Registros',
        icon: 'pi pi-align-justify',
        items: [
          {
            label: 'Usuario',
            icon: 'pi pi-user-plus',
            routerLink: '/registrarUsuario',
          },
          {
            label: 'Pet',
            icon: 'fa fa-dog',
            routerLink: '/registrarPet',
          },
          {
            label: 'Serviço',
            icon: 'fa fa-calendar-days',
            routerLink: '/registrarServico',
          },
        ]
      }
  ]
  }

}

