import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { Router } from '@angular/router';
import { ServiceMainService } from '../../../service-main.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [],
  imports: [
    TableModule,
    CommonModule,
    RippleModule,
    ButtonModule,
    MenubarModule,
    ToastModule,
    InputTextModule,
    FormsModule
  ],
})
export class HomeComponent {
  users: any[] = []; // Inicializa como array vazio
  listaFiltrada: any[] = []; // Lista que será usada na tabela
  pets: any;
  items: MenuItem[] | undefined;
  campoPesquisa: string = '';


  constructor(
    private router: Router,
    public serviceMainService: ServiceMainService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  filtrarTabela(){
    const valueCampoPesquisa = this.campoPesquisa.toLowerCase().trim();

    this.listaFiltrada = this.users.filter(user =>
      user.ownerName.toLowerCase().includes(valueCampoPesquisa) ||
      user.email.toLowerCase().includes(valueCampoPesquisa) ||
      user.telefone.toLowerCase().includes(valueCampoPesquisa)
    )
  }

  getUsers() {
    this.serviceMainService.getUsers().subscribe((users: any[]) => {
      this.users = users;
      this.listaFiltrada = users;
      console.log(this.users);
    });
  }

  deleteUser(id: number) {
    console.log(id);
    
    this.serviceMainService.deleteUSer(id).subscribe(
      (response) => {
        console.log('Usuário deletado com sucesso!', response);
        this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Usuário deletado com sucesso!' });
        this.getUsers();
      },
      (error) => {
        this.messageService.add({ severity: 'erro', summary: 'Error', detail: 'Erro ao deletar usuário!' });

        console.error('Erro ao deletar usuário:', error);
      }
    );
  }
}
