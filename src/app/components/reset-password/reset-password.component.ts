import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  private auth = inject(AuthService);
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  token: string;
  newPassword: string = '';
  confirmPassword: string = '';

  constructor() {
    this.token = this.route.snapshot.paramMap.get('ref')!;
  }

  async resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    let data = {
      token: this.token,
      password: this.newPassword
    };
    try {
    await this.auth.resetPassword(data)
    this.router.navigateByUrl('login')
    } catch(e) {
      console.log(e);
    }
  }
}
