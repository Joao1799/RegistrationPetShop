import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items!: ({ label: string; icon: string; routerLink: string; items?: undefined; } | { label: string; icon: string; items: { label: string; icon: string; }[]; routerLink?: undefined; } | { label: string; icon: string; items: { label: string; icon: string; routerLink: string; }[]; routerLink?: undefined; })[];

    constructor(private router: Router){};
  
    ngOnInit() {
      this.menuBar();
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
