import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  token: string;
  private route = inject(ActivatedRoute);
  private auth = inject(AuthService);
  private router = inject(Router);
  accountActivated: boolean = false;

  constructor() {
    this.token = this.route.snapshot.params['activation_token'];
    this.activateAccount()
  }

  async activateAccount() {
    try {
      await this.auth.activateAccount(this.token);
      this.accountActivated = true;
      setTimeout(() => {
        this.router.navigateByUrl('login');
      }, 3000);
    } catch (e) {
      console.log(e);
      this.accountActivated = false;
    }
  }
}
