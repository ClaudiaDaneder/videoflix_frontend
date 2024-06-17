import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbToastModule ],
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  user: User = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: ''
  };
  confirm_password = '';
  registrationFailed: boolean = false;
  passwordNoMatch: boolean = false;


  async registerUser() {
    if (this.user.password !== this.confirm_password) {
      this.passwordNoMatch = true;
      setTimeout(() => {
        this.passwordNoMatch = false;
      }, 3000);
      return;
    }

    try {
      let response: any = await this.auth.registerUser(this.user);
      console.log('User registration successful', response);
      this.router.navigateByUrl('login')
    } catch (e) {
      this.registrationFailed = true;
      setTimeout(() => {
        this.registrationFailed = false;
      }, 3000);
    }
  }
}
