import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-register-user',
    standalone: true,
    templateUrl: './register-user.component.html',
    styleUrl: './register-user.component.scss',
    imports: [ButtonModule, MenubarModule, CommonModule, ReactiveFormsModule, InputTextModule, MultiSelectModule, HeaderComponent]
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
    this.onSubmit();
  }


  onSubmit(){
    this.formUserRegister = this.fb.group({
        Nome: new FormControl(''),
        email: new FormControl(''),
        atendimento: new FormControl(''),
    })
  }

}
