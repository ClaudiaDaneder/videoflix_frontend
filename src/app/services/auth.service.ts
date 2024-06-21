import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public http = inject(HttpClient);
  isLoggedin: boolean = false;


  constructor() { }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == null || !token) {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
    else {
      return true;
    }
  }

  loginEmailPassword(username: string, password: string) {
    let url = environment.baseURL + 'login/';
    let body = {
      'username': username,
      'password': password
    }
    return lastValueFrom(this.http.post(url, body))
  }

  logout() {
    let url = environment.baseURL + 'logout/';
    return lastValueFrom(this.http.get(url));
  }

  registerUser(user: User) {
    let url = environment.baseURL + 'register/';
    return lastValueFrom(this.http.post<User>(url, user));
  }

  sendResetPasswordLink(data: any) {
    let url = environment.baseURL + 'password_reset/';
    return lastValueFrom(this.http.post(url, data))
  }

  resetPassword(data: any) {
    let url = environment.baseURL + `password_reset/confirm/?token=${data.token}`;
    return lastValueFrom(this.http.post(url, data))
  }


  activateAccount(token: string) {
    let url = environment.baseURL + `activate/`;
    let data= { activation_token: token }
    return lastValueFrom(this.http.post(url, data))
  }
}
