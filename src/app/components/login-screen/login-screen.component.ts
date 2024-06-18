import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  password: string = '';
  username: string = '';
  loginFailed: boolean = false;

  async login() {
    try {
      let response: any = await this.auth.loginEmailPassword(this.username, this.password);
      localStorage.setItem('token', response.token);
      this.router.navigateByUrl('content');
    } catch (e) {
      console.log(e);
      this.loginFailed = true;
      setTimeout(() => {
        this.loginFailed = false;
      }, 3000);
    }
  }
}
