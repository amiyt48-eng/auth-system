import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './forgot-password.component.html'
})

export class ForgotPasswordComponent {

  email = '';

  constructor(private authService: AuthService){}

  submit(){

    const data = { email: this.email };

    this.authService.forgotPassword(data)
      .subscribe({

        next: () => {
          alert("Reset link sent to email");
        },

        error: () => {
          alert("Error sending reset link");
        }

      });

  }

}