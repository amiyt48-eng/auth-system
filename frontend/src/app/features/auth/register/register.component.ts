import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  register(){

    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(data)
      .subscribe({

        next: () => {

          alert("Registration successful");

          this.router.navigate(['/auth/login']);

        },

        error: () => {
          alert("Registration failed");
        }

      });

  }

}