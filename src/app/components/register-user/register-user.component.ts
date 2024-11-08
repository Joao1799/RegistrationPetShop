import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ButtonModule,MenubarModule,CommonModule,ReactiveFormsModule,InputTextModule,MultiSelectModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  items:  MenuItem[] | undefined;
  formUserRegister: any;
  listAtendimentos: any = [
    { label: 'Banho e tosa' },
    { label: 'Vacinação' },
    { label: 'Consulta' },
    { label: 'Retorno' },
    { label: 'vazio' },
  ];

  constructor(private fb: FormBuilder){};

  ngOnInit(){
    this.menuBar();
    this.onSubmit();
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

  onSubmit(){
    this.formUserRegister = this.fb.group({
        Nome: new FormControl(''),
        email: new FormControl(''),
        atendimento: new FormControl(''),
    })
  }

}
