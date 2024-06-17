import { Component, Input, inject } from '@angular/core';
import { Video } from '../../interfaces/video';
import { environment } from '../../../environments/environment.development';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-video-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent {
  private route = inject(ActivatedRoute);
  private ds = inject(DataService);
  location = inject(Location)
  videoId!: number;
  video!: Video;
  url = environment.baseURL;
  video_url = this.url.slice(0, -1);

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.videoId = +params.get('id')!;
      this.loadVideoData(this.videoId);
    })
  }

  async loadVideoData(videoId: number) {
    try {
      let videos = await this.ds.loadVideoData();
      this.video = videos.find(video => video.id === videoId)!
    } catch (e) {
      console.log(e);
    }
  }

  back() {
    this.location.back()
  }
}
