import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { ServiceMainService } from '../../../service-main.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    providers: [],
    imports: [TableModule, CommonModule, RippleModule, ButtonModule, MenubarModule, HeaderComponent]
})
export class HomeComponent {
  users: any;
  pets: any;
  items:  MenuItem[] | undefined;

  constructor(private router: Router, public serviceMainService: ServiceMainService){};

  ngOnInit() {
    this.getUsers(); 

    // this.users = [
    //   {
    //     ownerName:"joao",
    //     email:"joaovictor@gmail.com",
    //     atendimentos:true,
    //     id:"123",
    //   },
    //   {
    //     ownerName:"pedro",
    //     email:"jpedrovictor@gmail.com",
    //     atendimentos:true,
    //     id:"1534",
    //   },
    //   {
    //     ownerName:"carlos",
    //     email:"123r@gmail.com",
    //     atendimentos:true,
    //     id:"1321",
    //   },      {
    //     ownerName:"jota",
    //     email:"jota@gmail.com",
    //     atendimentos:true,
    //     id:"1234",
    //   },
    //   {
    //     ownerName:"joao",
    //     email:"joaovictor@gmail.com",
    //     atendimentos:true,
    //     id:"1666",
    //   },      {
    //     ownerName:"joao",
    //     email:"joaovictor@gmail.com",
    //     atendimentos:true,
    //     id:"123",
    //   },
    //   {
    //     ownerName:"pedro",
    //     email:"jpedrovictor@gmail.com",
    //     atendimentos:true,
    //     id:"1534",
    //   },
    //   {
    //     ownerName:"carlos",
    //     email:"123r@gmail.com",
    //     atendimentos:true,
    //     id:"1321",
    //   },      {
    //     ownerName:"jota",
    //     email:"jota@gmail.com",
    //     atendimentos:true,
    //     id:"1234",
    //   },
    //   {
    //     ownerName:"joao",
    //     email:"joaovictor@gmail.com",
    //     atendimentos:true,
    //     id:"1666",
    //   },      {
    //     ownerName:"joao",
    //     email:"joaovictor@gmail.com",
    //     atendimentos:true,
    //     id:"123",
    //   },
    //   {
    //     ownerName:"pedro",
    //     email:"jpedrovictor@gmail.com",
    //     atendimentos:true,
    //     id:"1534",
    //   },
    //   {
    //     ownerName:"carlos",
    //     email:"123r@gmail.com",
    //     atendimentos:true,
    //     id:"1321",
    //   },      {
    //     ownerName:"jota",
    //     email:"jota@gmail.com",
    //     atendimentos:true,
    //     id:"1234",
    //   },
    //   {
    //     ownerName:"joao",
    //     email:"joaovictor@gmail.com",
    //     atendimentos:true,
    //     id:"1666",
    //   }
    // ]
  }

  getUsers(){
    this.serviceMainService.getUsers().subscribe((users)=> {
      this.users = users;
      console.log(this.users)
    })
  }



}

