import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedin!: boolean;
  auth = inject(AuthService);
  private router = inject(Router);
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('nav') as HTMLElement;
    if (window.scrollY > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  logout() {
    try {
      this.auth.logout();
      localStorage.removeItem('token');
      this.isLoggedIn();
      console.log('Logout Successful');
      this.router.navigateByUrl('login');

    } catch (e) {
      console.log(e);
    }
  }

  isLoggedIn() {
    this.isLoggedin = this.auth.isLoggedIn();
  }
}
