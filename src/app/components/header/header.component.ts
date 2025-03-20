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
  items!: any;

    constructor(private router: Router){};
  
    ngOnInit() {
      this.menuBar();
    }

  menuBar(){
    this.items = [
      {
          label:'Tabela',
          icon: 'fa fa-user',
          routerLink: '/home'
      },
      {
          label:'Atendimentos',
          icon: 'pi pi-calendar'
      },
      {
        label: 'Cliente',
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
}
