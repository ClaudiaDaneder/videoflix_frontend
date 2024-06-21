import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private auth = inject(AuthService);
  email: string = '';


  async sendResetLink() {
    let data = { email: this.email };
    try {
      await this.auth.sendResetPasswordLink(data);
    } catch (e) {
      console.log(e);

    }
  }

}
