import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {CardComponent} from './components/card/card.component'
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, HttpClientModule, FormsModule],
  providers: [PokemonService],
  template: '<h1>Aula de Services</h1> <app-card></app-card> <router-outlet></router-outlet>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services-angular';
}
