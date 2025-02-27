import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './components/body/home/home.component';
import { BodyComponent } from "./components/body/body.component";
import { HeaderComponent } from "./components/header/header.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, BodyComponent, HeaderComponent]
})
export class AppComponent {
  title = 'PetshopRegistration';
}
