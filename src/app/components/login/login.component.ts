import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ServiceMainService } from '../../service-main.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,ToastModule, CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    formUserRegister!: FormGroup;
    
    @Output() liberarAcesso: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private fb: FormBuilder, public serviceMainService: ServiceMainService,private messageService: MessageService){};
  
    ngOnInit() {
      this.form();
    }
  
    form(){
      this.formUserRegister = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]],
      });
    }
  
    registerUserFunc() {
      if (this.formUserRegister.valid) {
        this.serviceMainService.loginUserFunc(this.formUserRegister.value).subscribe((req) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login realizado com Sucesso' });
        this.liberarAcesso.emit(true);
        });
      } else {
        console.log('Formulário inválido',this.formUserRegister.value);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'falha de acesso' });
      }
    }

}
