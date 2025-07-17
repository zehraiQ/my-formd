import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App {
  protected readonly title = signal('my-form-app');
 
}
