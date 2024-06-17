import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public http = inject(HttpClient)
  constructor() { }

  loadVideoData() {
    let url = environment.baseURL + 'content/';
    return lastValueFrom(this.http.get<Video[]>(url))
  }

  loadVideoCategories() {
    let url = environment.baseURL + 'categories/';
    return lastValueFrom(this.http.get<{ value: string, name: string }[]>(url))
  }
}
