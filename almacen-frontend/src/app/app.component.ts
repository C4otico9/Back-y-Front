import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from "./paginas/layout/layout.component";
import {FormCargoComponent} from "./paginas/main-cargo/form-cargo/form-cargo.component";
import {MainCargoComponent} from "./paginas/main-cargo/main-cargo.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LayoutComponent,
    FormCargoComponent,
    MainCargoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MODA 3.0';
}
