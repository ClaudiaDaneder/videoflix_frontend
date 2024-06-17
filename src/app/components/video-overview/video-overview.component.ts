import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';
import { Video } from '../../interfaces/video';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-overview.component.html',
  styleUrls: ['./video-overview.component.scss']
})
export class VideoOverviewComponent {
  private ds = inject(DataService);
  private router = inject(Router);
  videos: Video[] = [];
  categories: { value: string, name: string }[] = [];
  url = environment.baseURL;

  constructor() {
    this.loadVideoData();
    this.loadVideoCategories();
  }

  async loadVideoData() {
    try {
      this.videos = await this.ds.loadVideoData()
    } catch (e) {
      console.log('Could not load video data', e);

    }
  }

  async loadVideoCategories() {
    try {
      this.categories = await this.ds.loadVideoCategories();
    } catch (e) {
      console.log('Could not load categories', e);

    }
  }

  openVideo(videoId: number){
    this.router.navigate(['content', videoId])
  }


  hasVideosInCategory(category: string): boolean {
    return this.videos.some(video => video.categories.includes(category));
  }
}
