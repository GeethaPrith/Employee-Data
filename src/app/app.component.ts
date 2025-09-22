import { Component } from '@angular/core';
import { FbcardComponent } from './fbcard/fbcard.component';
import { AuthComponent } from './auth/auth.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'emp';
}
