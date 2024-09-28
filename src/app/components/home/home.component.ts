import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { homeServices } from './home.service';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule,CommonModule,RippleModule,ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [homeServices],
})
export class HomeComponent {
  users: any;
  pets: any;

  constructor(private homeServices: homeServices){};

  ngOnInit() {
    this.getUsers(); 
  }

  getUsers(){
    this.homeServices.getUsers().subscribe((users)=> {
      this.users = users;
      console.log(this.users)
    // this.pets = this.users.map((user: any) => user.pets);
    // console.log(this.pets)
    })
  }

}
