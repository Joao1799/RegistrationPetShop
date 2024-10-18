import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { homeServices } from './home.service';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

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

  constructor(private homeServices: homeServices){};

  ngOnInit() {
    this.getUsers(); 
    this.menuBar();
  }

  getUsers(){
    this.homeServices.getUsers().subscribe((users)=> {
      this.users = users;
      console.log(this.users)
    })
  }

  menuBar(){
    this.items = [
      {
          label: 'Home',
          icon: 'fa fa-user'
      },
      {
          label: 'Atendimentos',
          icon: 'pi pi-calendar',
          items: [
              {
                  label: 'Consulta',
                  icon: 'fa fa-notes-medical'
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
                icon: 'pi pi-user-plus'
            },
            {
                label: 'Pet',
                icon: 'fa fa-dog'
            },
            {
                label: 'Retorno',
                icon: 'fa fa-calendar-days'
            }
        ]
      }
  ]
  }

}
